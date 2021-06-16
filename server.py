"""Server set up for KnowYourGreens"""
from jinja2 import StrictUndefined

from flask import Flask, jsonify, render_template, request, flash, redirect, session
from flask_login import LoginManager, current_user,login_user, logout_user
from model import connect_to_db, User
from passlib.hash import pbkdf2_sha256
import crud, scraper

app = Flask(__name__)
app.secret_key = "RANDOM SECRETLY GENERATED KEY"
app.jinja_env.undefined = StrictUndefined

login_manager = LoginManager()
login_manager.init_app(app)

@app.route('/')
def homepage():
    """View Homepage"""

    return render_template('index.html')


@app.route('/api/results',methods=["POST"])
def results():
    """Show info about plant from database"""
    plant = request.json.get("plant_name")
    results = crud.check_if_plant_in_db(plant)
    if len(results)==0:
        plant_url = plant.lower()
        if ' ' in plant:
            plant_url = plant.replace(' ','-')
        scraper.get_plant_info(plant_url)
        results = crud.check_if_plant_in_db(plant)
    img = crud.get_plant_info(plant)
    #results['img']  = img
    return jsonify(results)

@login_manager.user_loader
def user_loader(user_id):
    """Return User object for user user_id"""

    return User.query.get(user_id)

@app.route("/api/login", methods=["POST"])
def login():
    """Log user into their account"""
    if current_user.is_authenticated:
        print("authenticated")
        return jsonify({"isLoggedIn": True})
    username = request.json.get("username")
    password = request.json.get("password")
    user = User.query.filter_by(username=username).first()
    if user is not None and pbkdf2_sha256.verify(password, user.password):
        login_user(user)
        return jsonify({"isLoggedIn": True})
    
    return jsonify({"isLoggedIn": False})

# @app.route('/api/login', methods=["POST"])
# def login_process():
#     """Log user into their account"""
#     username = request.json.get("username")
#     password = request.json.get("password")
#     user = User.query.filter_by(username=username).first()
#     print(f'FOUND {user}')
#     if not user:
#         return False
#     elif not pbkdf2_sha256.verify(password, user.password):
#         return False
#     flash(f'Welcome, {user.name}!')
#     session['user_session'] = user.user_id
#     return True


@app.route('/favorites/<int:user_id>')
def show_user_favorites(user_id):
    """Show a list of user's favorited plants"""
    
    favorites = crud.get_favorites_by_userid(user_id)

    return render_template('favorites.html',favorites=favorites)


@app.route('/api/signup',methods=["POST"])
def create_user():
    """Create a new user"""
    name = request.json.get("name")
    username = request.json.get("username")
    password = pbkdf2_sha256.hash(request.json.get("password"))
    user_id = crud.create_user(username,name,password)
    if user_id:
        session['user_session'] = user_id
        return redirect('/')
    else:
        flash('Username taken! Please sign up with another username.')
        return redirect('/signup')

@app.route('/api/logout')
def logout():
    """Log user out of session."""
    logout_user()
    return jsonify({})


@app.route('/<path>')
def route(path):

    return render_template('index.html')
    
@app.route('/api/all-plants')
def view_all_plants():
     """Show all plants from database."""

     all_plants = crud.get_all_plants()
     return jsonify(all_plants)

if __name__ == '__main__':
    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)


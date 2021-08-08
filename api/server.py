"""Server set up for KnowYourGreens"""
from flask import Flask, jsonify, render_template, request, flash, session
from flask_login import LoginManager, current_user,login_user, logout_user
from model import connect_to_db, User
from passlib.hash import pbkdf2_sha256
from flask_cors import CORS
import crud, scraper

app = Flask(__name__)
app.secret_key = "RANDOM SECRETLY GENERATED KEY"
CORS(app)

login_manager = LoginManager()
login_manager.init_app(app)

# @app.route('/')
# def homepage():
#       """View Homepage"""

#       return render_template('index.html')


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
        session['user_session'] = user.user_id
        return jsonify({"isLoggedIn": True})

    return jsonify({"isLoggedIn": False})

@app.route('/api/show-favorites', methods=["POST"])
def show_favorites():
    """Show a list of user's favorited plants"""
    print("my favorites")
    user_id = session.get('user_session')
    user_favorites = crud.get_favorites_by_userid(user_id)
    return jsonify(user_favorites)

@app.route('/api/remove-favorite', methods=["POST"])
def remove_favorite():
    """Delete a plant from a list of user's favorited plants"""
    user_id = session['user_session']
    plant = request.json.get("plant")
    user_favorites = crud.remove_plant_from_favorites(user_id,plant)
    return jsonify(user_favorites)

@app.route('/api/add-favorites', methods=["POST"])
def add_to_favorites():
    """Add a plant to user's favorites"""
    plant = request.json.get("plant")
    user_id = session['user_session']
    new_favorite = crud.add_to_user_favorites(user_id,plant)
    return (new_favorite)


@app.route('/api/signup',methods=["POST"])
def create_user():
    """Create a new user"""
    name = request.json.get("name")
    username = request.json.get("username")
    password = pbkdf2_sha256.hash(request.json.get("password"))
    user_id = crud.create_user(username,name,password)
    if user_id:
        session['user_session'] = user_id
        return jsonify({"isUser": False})
    else:
        flash('Username taken! Please sign up with another username.')
        return jsonify({"isUser": True})

@app.route('/api/logout')
def logout():
    """Log user out of session."""
    del session['user_session']
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


@app.route('/api/plant/<plantname>', methods=["POST"])
def view_plant_details(plantname):
     """Show matching plants from database."""
     plantname = request.json.get("plantname")
     print(plantname)
     plant = crud.get_plant_info(plantname)
     if not plant:
        plant_url = plantname.lower()
        if ' ' in plantname:
            plant_url = plantname.replace(' ','-')
        scraper.get_plant_info(plant_url)
        plant = crud.check_if_plant_in_db(plantname)
     if(plant=={}):
         return jsonify(None)
     return jsonify(plant)


if __name__ == '__main__':
    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)


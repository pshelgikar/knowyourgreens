"""Server set up for KnowYourGreens"""
from jinja2 import StrictUndefined

from flask import Flask, jsonify, render_template, request, flash, redirect, session
from model import connect_to_db, User
from passlib.hash import pbkdf2_sha256
import crud, scraper

app = Flask(__name__)
app.secret_key = "RANDOM SECRETLY GENERATED KEY"
app.jinja_env.undefined = StrictUndefined


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
    print(f'Results: {results}')
    return jsonify(results)

@app.route('/login')
def login_form():
    """Show user the login page"""
    
    return render_template('login_form.html')

@app.route('/login', methods=["POST"])
def login_process():
    """Log user into their account"""
    username = request.form.get("username")
    password = request.form.get("password")
    user = User.query.filter_by(username=username).first()
    if not user:
        flash('No user found! Please try again!')
        return redirect('/login')
    elif not pbkdf2_sha256.verify(password, user.password):
        flash('Incorrect password, please try again!')
        return redirect('/login')
    flash(f'Welcome, {user.name}!')
    session['user_session'] = user.user_id
    return redirect('/')


@app.route('/favorites/<int:user_id>')
def show_user_favorites(user_id):
    """Show a list of user's favorited plants"""
    
    favorites = crud.get_favorites_by_userid(user_id)

    return render_template('favorites.html',favorites=favorites)

@app.route('/signup')
def sign_up_form():
    """Show user the sign up page"""
    
    return render_template('signup_form.html')


@app.route('/signup',methods=["POST"])
def create_user():
    """Create a new user"""
    name = request.form.get("name")
    username = request.form.get("username")
    password = pbkdf2_sha256.hash(request.form.get("password"))

    user_id = crud.create_user(username,name,password)
    if user_id:
        session['user_session'] = user_id
        return redirect('/')
    else:
        flash('Username taken! Please sign up with another username.')
        return redirect('/signup')

@app.route('/logout')
def logout():
    """Log user out of session."""

    del session['user_session']
    return redirect('/')


@app.route('/<path>')
def route(path):

    return render_template('index.html')
    
@app.route('/all-plants')
def view_all_plants():
     """Show all plants from database."""

     all_plants = crud.get_all_plants()
     return jsonify(all_plants)

if __name__ == '__main__':
    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)


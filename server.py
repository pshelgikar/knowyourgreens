"""Server set up for KnowYourGreens"""
from jinja2 import StrictUndefined

from flask import Flask, render_template, request, flash, redirect, session
from model import connect_to_db, User
from passlib.hash import pbkdf2_sha256
import crud, scraper

app = Flask(__name__)
app.secret_key = "RANDOM SECRETLY GENERATED KEY"
app.jinja_env.undefined = StrictUndefined

@app.route('/')
def homepage():
    """View Homepage"""

    return render_template('homepage.html')

@app.route('/results',methods=["POST"])
def results():
    """Show info about plant from database"""
    plant = request.form.get("plant_name")
    results = crud.check_if_plant_in_db(plant)
    if len(results)==0:
        plant_url = plant.lower()
        if ' ' in plant:
            plant_url = plant.replace(' ','-')
        scraper.get_plant_info(plant_url)
        results = crud.check_if_plant_in_db(plant)
    
    print(results)
    return render_template('results.html', results=results)

@app.route('/login')
def login():
    """Show user the login page"""
    
    return render_template('login.html')

@app.route('/login-user', methods=["POST"])
def login_user():
    """Log user into their account"""
    username = request.form.get("username")
    password = request.form.get("password")
    try:
        user = User.query.filter_by(username=username).one()
        if not pbkdf2_sha256.verify(password, user.password):
            flash('Incorrect password, please try again!')
            return redirect('/login')
        else:
            flash(f'Welcome, {user.name}!')
    except:
        flash('No user found! Please try again!')
        return redirect('/login')
    
    session['user_session'] = user.user_id
    return redirect('/')

@app.route('/signup')
def sign_up():
    """Show user the sign up page"""
    
    return render_template('signup.html')

@app.route('/favorites')
def show_user_favorites():
    """Show a list of user's favorited plants"""
    pass

@app.route('/create-user',methods=["POST"])
def create_user():
    """Create a new user"""
    name = request.form.get("name")
    username = request.form.get("username")
    password = pbkdf2_sha256.hash(request.form.get("password"))

    user_id = crud.create_user(username=username,name=name,password=password)
    session['user_session'] = user_id
    
    return redirect('/')

    

if __name__ == '__main__':
    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)


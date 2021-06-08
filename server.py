"""Server set up for KnowYourGreens"""

from flask import (Flask, render_template,session,request, redirect, flash)
from model import connect_to_db
from passlib.hash import pbkdf2_sha256
import crud, scraper

app = Flask(__name__)
app.secret_key = "RANDOM SECRETLY GENERATED KEY"

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
        #replace function
        if ' ' in plant:
            plant_url = plant.replace(' ','-')
        scraper.get_plant_info(plant_url)
        results = crud.check_if_plant_in_db(plant)
    
    print(results)
    return render_template('results.html', results=results)

@app.route('/login')
def login():
    """Log a user in"""
    pass

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
    
    return render_template('homepage.html')

    

if __name__ == '__main__':
    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)


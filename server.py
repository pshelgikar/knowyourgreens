"""Server set up for KnowYourGreens"""

from flask import (Flask, render_template)
from model import connect_to_db
import crud

app = Flask(__name__)
app.secret_key = "RANDOM SECRETLY GENERATED KEY"

@app.route('/')
def homepage():
    """View Homepage"""

    return render_template('homepage.html')

@app.route('/results',methods=["POST"])
def results():
    """Show info about plant from database"""

    plant = request.form.get(plant_name)

def results()


if __name__ == '__main__':
    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)


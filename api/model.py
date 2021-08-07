"""Models for plant care look up app."""
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.secret_key = "RANDOM SECRETLY GENERATED KEY"
db = SQLAlchemy()

class Plant(db.Model):
    """A plant"""

    __tablename__ = 'plants'
    
    plant_id = db.Column(db.Integer, 
                         autoincrement=True,
                         primary_key=True)
    name = db.Column(db.String, 
                     nullable=False,
                     unique=True)
    
    img_src = db.Column(db.String,
                        nullable=False)
    
    varietals = db.relationship('Varietal',backref='plant') #backref creates a table on plants

    def __repr__(self):
        return f'Plant {self.name} was added to the database'


class User(db.Model):
    """A user"""

    __tablename__ = 'users'

    user_id = db.Column(db.Integer,
                        autoincrement=True,
                        primary_key=True)
    username = db.Column(db.String(25),
                         nullable=False,
                         unique=True)
    name = db.Column(db.String,
                     nullable=False)
    password = db.Column(db.String,
                        nullable=False)

    authenticated = db.Column(db.Boolean, default=False)

    def is_active(self):
        """True for all users"""
        return True
    
    def get_id(self):
        """Return the username for user logging in"""
        return str(self.user_id)

    def is_authenticated(self):
        """Return true if user is authenticated."""
        return self.authenticated

    def is_anonymous(self):
        """False as anonymous users are not allowed to view favorites"""
        return False


    favorites = db.relationship('Favorite',backref='user') #backref creates a table on users

    def __repr__(self):
        return f'User {self.name} was added to the database'
    

class Favorite(db.Model):
    """Plant favorited by a user"""

    __tablename__ = 'favorites'

    favorite_id = db.Column(db.Integer,
                            autoincrement=True,
                            primary_key=True)
    user_id = db.Column(db.Integer,db.ForeignKey('users.user_id'))
    plant_id = db.Column(db.Integer,db.ForeignKey('plants.plant_id'))

    def __repr__(self):
        return f'Plant {self.plant_id} was added to the list of favorites for User id {self.user_id}'


class Varietal(db.Model):
    """Plant varietals and their info"""

    __tablename__ = 'varietals'

    varietal_id = db.Column(db.Integer,
                            autoincrement=True,
                            primary_key=True)
    plant_id = db.Column(db.Integer,
                         db.ForeignKey('plants.plant_id'))
    varietal_name = db.Column(db.String,
                              nullable=False)
    sunlight = db.Column(db.Text)
    water = db.Column(db.Text)
    humidity = db.Column(db.Text)
    temperature = db.Column(db.Text)
    toxicity = db.Column(db.Text)

    def __repr__(self):
        return f'Plant {self.varietal_name} was added to the database'


def connect_to_db(flask_app, db_uri='postgresql:///knowyourgreens', echo=True):
    flask_app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
    flask_app.config['SQLALCHEMY_ECHO'] = echo
    flask_app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.app = flask_app
    db.init_app(flask_app)
    db.create_all()

    print("Connected to db!")


connect_to_db(app)
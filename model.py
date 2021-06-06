"""Models for plant care look up app."""
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

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
    ##passlib/werkzeug/Flask-Bcrypt
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
    varietal = db.Column(db.String,
                        nullable = False)

    def __repr__(self):
        return f'Plant {self.varietal} was added to the list of favorites for User id {self.user_id}'


class Varietal(db.Model):
    """Plant varietals and their info"""

    __tablename__ = 'varietals'

    varietal_id = db.Column(db.Integer,
                            autoincrement=True,
                            primary_key=True)
    plant_id = db.Column(db.Integer,
                         db.ForeignKey('plants.plant_id'))
    varietal_name = db.Column(db.String,
                              nullable=False,
                              unique=True)
    sunlight = db.Column(db.Text,
                         nullable=False)
    water = db.Column(db.Text,
                         nullable=False)
    humidity = db.Column(db.Text,
                         nullable=False)
    temperature = db.Column(db.Text,
                         nullable=False)
    toxicity = db.Column(db.Text,
                         nullable=False)

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
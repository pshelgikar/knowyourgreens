"""CRUD Operations"""

from model import db, Plant, User, Favorite, Varietal, connect_to_db
from passlib.hash import pbkdf2_sha256

def create_user(username, name, password):
    """Create new user"""
    if not User.query.filter_by(username=username).first():
        user = User(username=username,name=name,password=password)
        print(user)
        db.session.add(user)
        db.session.commit()
        return user.user_id
    else:
        print('Username exists!')
        return 
    

def get_plant_info(name):
    """Get info about plant"""
    plant = Plant.query.filter(Plant.name.ilike(f'%{name}%')).one()

    return plant.img_src

def check_if_plant_in_db(name):
    """Check if plant info exists in db"""
    results = {}
    all_plants = Plant.query.options(db.joinedload('varietals'))
    all_name_instances = all_plants.filter(Plant.name.ilike(f'%{name}%')).all()

    for plant in all_name_instances:
        plant_varietals = plant.varietals
        for varietal in plant_varietals:
            results[varietal.varietal_name] = varietal.varietal_name
            results[varietal.varietal_name] = {}
            results[varietal.varietal_name]['Sunlight'] = varietal.sunlight
            results[varietal.varietal_name]['Water'] = varietal.water
            results[varietal.varietal_name]['Humidity'] = varietal.humidity
            results[varietal.varietal_name]['Temperature'] = varietal.temperature
            results[varietal.varietal_name]['Toxicity'] = varietal.toxicity
    
    return results


def get_favorites_by_userid(userid):
    """Return list of favorites for userid"""

    favorites = Favorite.query.filter_by(user_id=userid).all()
    return favorites

def get_care_instructions(plant_id):
    """Show care instructions for plant with id passed"""
    pass

def get_all_plants():
    """Return all plants from database."""
    all_plants = Plant.query.all()
    return all_plants
    
def get_varietals(plant_id):
    """Return all varietals for a certain plant"""
    pass

def add_to_favorites(plant_id, userid):
    """Add plant to favorites for user"""
    pass




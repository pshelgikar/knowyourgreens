from bs4 import BeautifulSoup
from urllib.request import Request, urlopen
from model import db, Plant, User, Favorite, Varietal,connect_to_db

##passing html to BS to get a BS object

def get_plant_info(plant_name):
    url = f"https://bloomscape.com/plant-care-guide/{plant_name}/"
    print(f'Fetching {url}')
    req = Request(url , headers={'User-Agent': 'Mozilla/5.0'})
    webpage = urlopen(req).read()
    soup = BeautifulSoup(webpage,"html.parser")

    plant_name = soup.find('a',class_="breadcrumbs--active").text
    
    plant = Plant(name=plant_name)
    db.session.add(plant)
    db.session.commit()

    varietals = soup.find_all('details',class_='accordion')

    for v in varietals:
        current_plant = v.summary.h2
        varietal_name = current_plant.text
        
        care_list = v.find_all('section',class_='plant-care-instruction')
        
        for care in care_list:
            value = care.find('div',class_='care-title').text.strip()
            if value == "LIGHT":
                sunlight = care.p.getText()
            if value == "HUMIDITY":
                humidity = care.p.getText()
            if value == "WATER":
                water = care.p.getText()
            if value == "TEMPERATURE":
                temperature = care.p.getText()
            if value == "TOXICITY":
                toxicity = care.p.getText()

        varietal = Varietal(plant_id = plant.plant_id, varietal_name = varietal_name, sunlight=sunlight,water=water,humidity=humidity,toxicity=toxicity, temperature=temperature)
        db.session.add(varietal)
        db.session.commit()



from bs4 import BeautifulSoup
from urllib.request import Request, urlopen
from model import db, Plant, Varietal

##passing html to BS to get a BS object

def get_plant_info(plant_name):
    url = f"https://bloomscape.com/plant-care-guide/{plant_name}/"
    print(f'Fetching {url}')
    req = Request(url , headers={'User-Agent': 'Mozilla/5.0'})
    try:
        webpage = urlopen(req).read()
    except:
        return
    soup = BeautifulSoup(webpage,"html.parser")

    plant_name = soup.find('a',class_="breadcrumbs--active").text
    
    plant = Plant(name=plant_name.lower())
    db.session.add(plant)
    db.session.commit()

    varietals = soup.find_all('details',class_='accordion')

    for v in varietals:
        current_plant = v.summary.h2
        varietal_name = current_plant.text
        
        care_list = v.find_all('section',class_='plant-care-instruction')
        
        for care in care_list:
            value = care.find('div',class_='care-title').text.strip()
            care_instructions = care.p.getText()
            if value == "LIGHT":
                sunlight = care_instructions
            elif value == "HUMIDITY":
                humidity = care_instructions
            elif value == "WATER":
                water = care_instructions
            elif value == "TEMPERATURE":
                temperature = care_instructions
            elif value == "TOXICITY":
                toxicity = care_instructions

        varietal = Varietal(plant_id = plant.plant_id, varietal_name = varietal_name, sunlight=sunlight,water=water,humidity=humidity,toxicity=toxicity, temperature=temperature)
        db.session.add(varietal)
        db.session.commit()


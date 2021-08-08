import React from 'react';
import AddToFavorites from './AddToFavorites'
import {Card} from 'react-bootstrap'
import NavigateToPlant from './NavigateToPlant';

import images from './../../images';

export default function PlantCard(props){
    const {plant_id,name,img, isLoggedIn, favorites, onAddToFavorites, onRemoveFromFavorites} = props;
    let fav=false;
    for(let plant of favorites){
        if(plant['name']==name){
          fav = true;  
        }
    }
    
    let img_name;
    img_name = name.toLowerCase();
    if(img_name.indexOf(' ')!=0){
        img_name = img_name.replace(/ +/g, '');
    }

    return(
        <div key={plant_id} className="plant-card">
            <Card style={{ width: '18rem'}}>    
                <Card.Img variant="top" src={images[img_name]} className="card-img"/>
                <Card.Body>
                    <Card.Title className="title">{name}</Card.Title>
                    <Card.Text>
                    <AddToFavorites isLoggedIn={isLoggedIn} 
                            fav={fav} name={name} 
                            onAddToFavorites={onAddToFavorites}
                            onRemoveFromFavorites={onRemoveFromFavorites}
                            />
                    <NavigateToPlant plant={name} />  
                    </Card.Text>
                </Card.Body>
            </Card>  
        </div>
    )
}

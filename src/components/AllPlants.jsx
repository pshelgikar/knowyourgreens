import React from 'react'
import PlantCard from './PlantCard'
import {Spinner} from 'react-bootstrap'


export default function AllPlants(props) {
    const {isLoggedIn,favorites,onAddToFavorites,onRemoveFromFavorites} = props;
    const [loading, setLoading] = React.useState(false);
    const [plants, getPlants] = React.useState({});
        
    React.useEffect(()=>{
        setLoading(true);
        fetch('/api/all-plants')
        .then((response)=>response.json())
        .then((data)=>{
            getPlants(data);
            setLoading(false);
        })
    },[]);


    const plantCards = [];
    for(const plant of Object.values(plants)){
        const plantCard = (
            <div className="plant-card" key={plant.id}>
                <PlantCard
                    name = {plant.name}
                    img = {plant.img}
                    isLoggedIn = {isLoggedIn}
                    favorites = {favorites}
                    onAddToFavorites = {onAddToFavorites}
                    onRemoveFromFavorites = {onRemoveFromFavorites}
                />
            </div>
        );
        plantCards.push(plantCard);
    }
    return (
        <div className="pageContents">
            
            {loading?
                (<Spinner animation="border" role="status">
                    <span className="visually-hidden"></span>
                </Spinner>):
                <div className="varietal all-plants">
                    <h1>All Plants</h1>
                    <div>{plantCards}</div>
                </div>  
            }
        </div>
    );
}
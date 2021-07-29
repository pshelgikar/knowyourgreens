import React from 'react'
import PlantCard from './PlantCard'
import NavigateToPlant from './NavigateToPlant'

export default function AllPlants(props) {
    const {isLoggedIn,favorites,onAddToFavorites,onRemoveFromFavorites} = props;
    const [plants, getPlants] = React.useState({});
        
    React.useEffect(()=>{
        fetch('/api/all-plants')
        .then((response)=>response.json())
        .then((data)=>{
            getPlants(data);
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
                <NavigateToPlant plant={plant} />  
            </div>
        );
        plantCards.push(plantCard);
    }
    return (
        <div className="pageContents">
            <h1>All Plants</h1>
            <div>{plantCards}</div>
        </div>
    );
}
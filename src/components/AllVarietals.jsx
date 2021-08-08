import React from 'react';
import VarietalCard from './VarietalCard'
import { useParams } from 'react-router-dom';
import bg from './../../images';

export default function AllVarietals(){
    const [parentPlant, setParentPlant] = React.useState({});
    const [plants, setPlants] = React.useState({});
    const {plantName} = useParams();

    React.useEffect(()=>{
        fetch('/api/results',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'plant_name': plantName
            })
        })
        .then((response)=>response.json())
        .then((data)=>{
            setPlants(data);
        })

    },[plantName])

    React.useEffect(()=>{
        fetch(`/api/plant/${plantName}`,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'plantname': plantName
            })
        })
        .then((response)=>response.json())
        .then((data)=>{
            setParentPlant(data);
        })

    },[parentPlant])
    
    let img_name;
    img_name = plantName.toLowerCase();
    if(img_name.indexOf(' ')!=0){
        img_name = img_name.replace(/ +/g, '');
    }
    
    const varietalCards = [];
    let varietalCard=null;
    for(const [varietal,care] of Object.entries(plants)){
        varietalCard = (
            <div key={varietal} className='search-results' >
                <VarietalCard
                    name={varietal}
                    sunlight={care.Sunlight}
                    water={care.Water}
                    humidity={care.Humidity}
                    toxicity={care.Toxicity}
                    temperature={care.Temperature}
                />
            </div>
            );
        varietalCards.push(varietalCard)
    }
    return(
        <div className="pageContents body-text varietal"> 
            <div className="varietal-cover">
                <span className="image-credit">Photo by <a href="https://unsplash.com/@kaufmann_mercantile?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kaufmann Mercantile</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>
                <h1 className="title">{plantName}</h1> 
            </div>
            <div>{varietalCards}</div>
        </div>
    )
}

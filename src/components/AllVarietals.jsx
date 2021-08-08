import React from 'react';
import VarietalCard from './VarietalCard'
import { useParams } from 'react-router-dom';
import images from './../../images';

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
        <div className="pageContents body-text varietal" 
             style={{backgroundImage:`url(${images[img_name]})`, 
                     backgroundRepeat: 'no-repeat', 
                     backgroundSize:'cover',
                     backgroundPosition:'30% 30%' }}>
            <div className="varietal-cover">
                <h1 className="title">{plantName}</h1> 
            </div>
            <div>{varietalCards}</div>
        </div>
    )
}

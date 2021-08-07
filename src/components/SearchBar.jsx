import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function SearchBar() {
    const [plant, searchPlant] = React.useState('');
    const [isPlant, setPlant] = React.useState(true);
    const history = useHistory();

    const handleInput = (evt) => {
        searchPlant(evt.target.value)
    }

    React.useEffect(()=>{
        
    })
    const handleSubmit = (evt) => {
        evt.preventDefault();
        fetch('/api/plant/<plantname>',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                'plantname' : plant
            })
        })
        .then((response)=>response.json())
        .then((data)=>{
            if(data==null){
                console.log(data)
                setPlant(false)
            }
            else{
                setPlant(true)
                history.push(`/plants/${plant}`) 
            }
        }) 
    }
    
    return (
        <div className="pageContents body-text">
            {!isPlant && 
                <div>Hmmm this doesn't exist in our database. Please try with another plant name.</div>}
            
            <form onSubmit={handleSubmit} className='form-elements'>
                <input 
                    placeholder="Plant Name" 
                    type="text" 
                    value={plant} 
                    name="plant_name" 
                    onChange={handleInput} required={true}/>
                <Button type="submit" size="sm">Search</Button>
                {/* <button type="submit">Search</button> */}
            </form>
            
        </div>
    );
}
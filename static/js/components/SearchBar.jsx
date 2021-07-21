
function SearchBar() {
    const [plant, searchPlant] = React.useState('');
    const [isPlant, setPlant] = React.useState(true);
    const history = ReactRouterDOM.useHistory();

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
        <div className="pageContents">
            {!isPlant && 
                <div>Hmmm this doesn't exist in our database. Please try with another plant name.</div>}
            <div>Worried about your plants? Not sure how to care for your new green housemates?</div>
            <div>Enter a name to find out how to take care of your plants!</div>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Plant Name" 
                    type="text" 
                    value={plant} 
                    name="plant_name" 
                    onChange={handleInput} required={true}/>
                <button type="submit">Search</button>
            </form>
            
        </div>
    );
}
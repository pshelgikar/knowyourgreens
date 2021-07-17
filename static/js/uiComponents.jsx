
function Homepage(props) {
    const {isLoggedIn} = props;
    if (isLoggedIn){
        return (
            <div className="pageContents">
                <h1>Welcome!</h1>
                <h1>Know Your Greens</h1>
                <div>Care instructions for your green housemates.</div>
            </div>
        );
    }
    return (
            <div className="pageContents">
                <h1>Know Your Greens</h1>
                <div>Care instructions for your green housemates.</div>
            </div>
        );  
}

function NavigateToPlant(props){
    const {plant} = props;
    const history = ReactRouterDOM.useHistory();
    const onShowDetails = () => {
        history.push(`/plants/${plant.name}`) 
    }

    return(
        <div className="pageContents">
            <button onClick={onShowDetails}>View Details</button>
        </div>
    )
}


function AllPlants(props) {
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

function Favorites(props){
    const {isLoggedIn, favorites, onAddToFavorites, onRemoveFromFavorites} = props;
    const favoritePlants = [];
    let isFav=false;
    let favCard = null;
    for(let fav in favorites){
        if(!favorites){
            isFav=false
        }
        else{
            isFav=true;
            for (const item of Object.entries(favorites[fav])){ 
                favCard = (
                    <div className="plant-card" key={favorites[fav]['plant_id']}>
                         <PlantCard
                            name = {favorites[fav]['name']}
                            img = {favorites[fav]['img']}
                            favorites = {favorites}
                            isLoggedIn = {isLoggedIn}
                            onAddToFavorites = {onAddToFavorites}
                            onRemoveFromFavorites = {onRemoveFromFavorites}
                        />
                          <NavigateToPlant plant={favorites[fav]} />
                    </div>
                  )
              }
          favoritePlants.push(favCard)
        }
      }
    console.log(favoritePlants)
    return(
        
        <div className="pageContents">
            <div><h1>Favorites</h1></div>   
            {!isFav && 
                <div>This looks a little empty right now, add some plants to your list of favorites!</div>}
            <div>{favoritePlants}</div>
        </div>
        
    )
}


function AllVarietals(){
    const [parentPlant, setParentPlant] = React.useState({});
    const [plants, setPlants] = React.useState({});
    const {plantName} = ReactRouterDOM.useParams();
    let img='';

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
    // if empty return loading state

     const varietalCards = [];
     let varietalCard=null;
     for(const [varietal,care] of Object.entries(plants)){
            varietalCard = (
                <VarietalCard
                    key={varietal.varietal_id}
                    name={varietal}
                    sunlight={care.Sunlight}
                    water={care.Water}
                    humidity={care.Humidity}
                    toxicity={care.Toxicity}
                    temperature={care.Temperature}
                />
            );
            varietalCards.push(varietalCard)
        }

     return(
         <div className="pageContents">
             <h1>{plantName}</h1>   
             <img src={parentPlant}></img>
             <div>{varietalCards}</div>
         </div>
     )

}

function VarietalCard(props){
    const {name,sunlight,water,humidity,toxicity,temperature} = props;
    return(
        <div>
            <h1>{name}</h1>
            <h2>Sunlight</h2>
            <div>{sunlight}</div>
            <h2>Water</h2>
            <div>{water}</div>
            <h2>Humidity</h2>
            <div>{humidity}</div>
            <h2>Toxicity</h2>
            <div>{toxicity}</div>
            <h2>Temperature</h2>
            <div>{temperature}</div>
        </div>
    )
}

function PlantCard(props){
    const {plant_id,name,img, isLoggedIn, favorites, onAddToFavorites, onRemoveFromFavorites} = props;
    let fav=false;
    for(let plant of favorites){
        if(plant['name']==name){
          fav = true;  
        }
    }

    //look into "includes"/verify keys

    return(
        <div key={plant_id} className="plant-card">
            <h2>{name}</h2>
            <img src={img}/>
            <AddToFavorites isLoggedIn={isLoggedIn} 
                            fav={fav} name={name} 
                            onAddToFavorites={onAddToFavorites}
                            onRemoveFromFavorites={onRemoveFromFavorites}
                            />
        </div>
    )
}

function AddToFavorites(props){
    const {isLoggedIn,fav,onAddToFavorites,onRemoveFromFavorites,name} = props;
    const onAddFavs = (evt) => {
        evt.preventDefault();
        onAddToFavorites(name)
    }

    const onRemoveFavs = (evt) => {
        evt.preventDefault();
        onRemoveFromFavorites(name)
    }
    

    return(
        <div className="pageContents"> 
            {(isLoggedIn) &&  
                (fav ? 
                    <button onClick={onRemoveFavs}>Remove from Favorites</button> :
                    <button onClick={onAddFavs}>Add to Favorites</button>)       
            }
        </div>
    )
}

function SearchBar(props) {
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

function SignUp(props) {
    const {setUser,isNewUser} = props;
    console.log(isNewUser)
    const history = ReactRouterDOM.useHistory();
    const [state, setState] = React.useState({
        username : "",
        password : "",
        name : ""
    })
    
    const handleChange = (evt) => {
        const {id, value} = evt.target
        setState((prevState)=>({
            ...prevState,
            [id]:value
        }))
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        setUser(state.username,state.password,state.name)
    }
    return (
        <div className="pageContents">
            {!isNewUser &&
                <div>User exists, please pick another username!</div>}
            <h1>Sign Up</h1>
            <form onSubmit = {handleSubmit}>
                First Name<input type="name" id = "name" value={state.name} required={true} onChange={handleChange}/>
                Enter Username<input type="text" id="username" value={state.username} required={true} onChange={handleChange} />
                Password<input type="password" id="password" value={state.password} required={true} onChange={handleChange}/>
                <button type="submit">Sign up!</button>
            </form>
        </div>  
    );
}

function Login(props) {
    //change setUser to something else -> convention for useState
    const {setUser,isValid} = props;
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleUsername = (evt) => {
        setUsername(evt.target.value)
    }
    const handlePassword = (evt) => {
        setPassword(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setUser(username,password)
    }


    return(
        <div className="pageContents">
             {!isValid && 
                <div>Uh oh, login credentials don't look right..</div>}
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                Enter Username<input type="text" name="username" required={true} onChange={handleUsername} />
                Password<input type="password" name="password" required={true} onChange={handlePassword}/>
                <input type="submit"/>
            </form>
        </div>
    )
}


function Nav(props){
    const {isLoggedIn, logUserOut} = props;
    function onLogout(evt){
        evt.preventDefault();   
        window.localStorage.removeItem('favPlants')
        logUserOut()
    }
    return(
        <nav>
            <ul className='nav-links'>
                <ReactRouterDOM.NavLink to="/">
                    <li>know your greens</li>
                </ReactRouterDOM.NavLink>
                <ReactRouterDOM.NavLink to="/all-plants">
                    <li>All Plants</li>
                </ReactRouterDOM.NavLink>
                <ReactRouterDOM.NavLink to="/favorites">
                    {isLoggedIn &&
                        (<li>My Favorites</li>)
                    }
                </ReactRouterDOM.NavLink>
                <ReactRouterDOM.NavLink to="/logout" onClick = {onLogout}>
                    {isLoggedIn &&
                        (<li>Logout</li>)
                    }
                </ReactRouterDOM.NavLink>
                <ReactRouterDOM.NavLink to="/login">
                    {!isLoggedIn && 
                        (<li>Login</li>)
                    }
                </ReactRouterDOM.NavLink>
                <ReactRouterDOM.NavLink to="/sign-up">
                    {!isLoggedIn && 
                        (<li>Sign Up</li>)
                    }
                </ReactRouterDOM.NavLink>
            </ul>
        </nav>
    );
}

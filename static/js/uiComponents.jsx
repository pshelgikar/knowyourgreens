
function Homepage(props) {
    return (
        <div className="pageContents">
            <h1>Know Your Greens</h1>
            <p>Care instructions for your green housemates.</p>
        </div>
    );
}

function AllPlants(props) {
    const {plants} = props;
    const plantCards = [];
    for(const plant of Object.values(plants)){
        const plantCard = (
            <PlantCard
                name = {plant.name}
                img = {plant.img}
            />
        );
        plantCards.push(plantCard);
    }

    return (
        <div className="pageContents">
            <h1>All Plants</h1>
            <p>{plantCards}</p>
        </div>
    );
}

function AllVarietals(props){

     const {results} = props;
     const varietalCards = [];
     let varietalCard=null;
     for(const [varietal,care] of Object.entries(results)){
            varietalCard = (
                <VarietalCard
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
             <p>{varietalCards}</p>
         </div>
     )

}

function VarietalCard(props){
    const {name,sunlight,water,humidity,toxicity,temperature} = props;
    return(
        <div>
            <h1>{name}</h1>
            <h2>Sunlight</h2>
            <p>{sunlight}</p>
            <h2>Water</h2>
            <p>{water}</p>
            <h2>Humidity</h2>
            <p>{humidity}</p>
            <h2>Toxicity</h2>
            <p>{toxicity}</p>
            <h2>Temperature</h2>
            <p>{temperature}</p>
        </div>
    )
}

function PlantCard(props){
    const {name,img} = props;
    return(
        <div className="plant-card">
            <h2>{name}</h2>
            <img src={img}/>
        </div>
    )
}

function SearchResults(props) {
    const {searchTerm} = props;
    return(
        <div>
           <AllVarietals results={searchTerm}/> 
        </div>
    )
}

function SearchBar(props) {
    const {onSearch} = props;
    const [plant, searchPlant] = React.useState('');

    const handleInput = (evt) => {
        searchPlant(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSearch(plant)  
    }
    
    return (
        <div className="pageContents">
            <p>Worried about your plants? Not sure how to care for your new green housemates?</p>
            
            <p>Enter a name to find out how to take care of your plants!</p>
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
    console.log(props)
    const {setNewUser} = props;
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
        setNewUser(state.username,state.password,state.name)
    }
    return (
        <div className="pageContents">
            <h1>Sign Up</h1>
            <form onSubmit = {handleSubmit}>
                First Name<input type="name" id = "name" value={state.name} onChange={handleChange}/>
                Enter Username<input type="text" id="username" value={state.username} onChange={handleChange} />
                Password<input type="password" id="password" value={state.password} onChange={handleChange}/>
                <button type="submit">Sign up!</button>
            </form>
        </div>  
    );
}

function Login(props) {

    const {setUser} = props;
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
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                Enter Username<input type="text" name="username" required={true} onChange={handleUsername} />
                Password<input type="password" name="password" required={true} onChange={handlePassword}/>
                <input type="submit"/>
                <p>New User?</p>
                <a href='/sign-in'>Sign up instead!</a>
            </form>
        </div>
    )
}

function Nav(){
    return(
        <nav>
            <ReactRouterDOM.NavLink to="/">
                <p>Home</p>
            </ReactRouterDOM.NavLink>
            <ul className='nav-links'>
            <ReactRouterDOM.NavLink to="/all-plants">
                <li>All Plants</li>
            </ReactRouterDOM.NavLink>
            <ReactRouterDOM.NavLink to="/login">
                <li>Login</li>
            </ReactRouterDOM.NavLink>
            <ReactRouterDOM.NavLink to="/sign-up">
                <li>Sign Up</li>
            </ReactRouterDOM.NavLink>
            </ul>
        </nav>
    );
}

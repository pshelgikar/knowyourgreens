function App() {
    const [plants, getPlants] = React.useState({});
    const [searchTerm, setSearchTerm] = React.useState({});
    const [user, setUser] = React.useState(false);
    const [newUser, setNewUser] = React.useState([]);

    React.useEffect(()=>{
        fetch('/all-plants')
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            getPlants(data);
        })
    },[]);

    const onSearch = (plant) => {
        fetch('/api/results',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'plant_name': plant
            })
        })
        .then((response)=>response.json())
        .then((data)=>{
        setSearchTerm(data);
        })
    }


    const onLogin = (username,password) => {
        fetch('/api/login',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': username,
                'password': password
            })
        })
        .then((response)=>response.json())
        .then((data)=>{
            console.log(`Data is ${data.isLoggedIn}`)
            if(data.isLoggedIn==false){
                setUser(false)
            }
            else{
                setUser(true)
            }
        })
    }

    const onCreateUser = (username, password, name) => {
        
        fetch('/api/signup',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name':name,
                'username': username,
                'password': password
            })
        })
        .then((response)=>response.json())
        .then((data)=>{
        setNewUser(data);
        })
    }
    
    return (
        <ReactRouterDOM.BrowserRouter>
            <div className="App">
                <Nav />
                <ReactRouterDOM.Route exact path="/">
                    <Homepage />
                    <SearchBar onSearch={onSearch} />
                    <SearchResults searchTerm={searchTerm}/>
                </ReactRouterDOM.Route>

                <ReactRouterDOM.Route exact path="/all-plants"> 
                    <AllPlants plants={plants} />
                </ReactRouterDOM.Route>

                <ReactRouterDOM.Route exact path="/sign-up">
                    <SignUp setNewUser={onCreateUser}/>
                </ReactRouterDOM.Route>

                <ReactRouterDOM.Route exact path="/login">
                    <Login setUser={onLogin} />
                </ReactRouterDOM.Route>

            </div>
        </ReactRouterDOM.BrowserRouter>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
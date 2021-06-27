function App() {
    
    //const [searchTerm, setSearchTerm] = React.useState({});
    const [user, setUser] = React.useState(false);
    //const [newUser, setNewUser] = React.useState(false);
    const history = ReactRouterDOM.useHistory();
    const { pathname } = ReactRouterDOM.useLocation();
    //useeffect to check logged in state - loading state[shopping site]

    const showFavorites = () => {
        fetch('/api/show-favorites',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response)=>JSON.stringify())
        .then((data)=>{
            console.log(data)
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
                history.push('/')
            }
        })
    }


    const onLogout = () => {
        fetch('/api/logout',{
            method:"GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response)=>response.json())
        .then(()=>{
            console.log('Logout successful!')
            setUser(false)
            history.push('/')
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
        //setNewUser(data);
        setUser(data)
        })
    }
    
    return (
        <React.Fragment>
            <div className="App">
                <Nav isLoggedIn={user} logUserOut={onLogout} />
                <ReactRouterDOM.Route exact path="/">
                    <Homepage isLoggedIn={user}/>
                    <SearchBar />
                </ReactRouterDOM.Route>

                <ReactRouterDOM.Route exact path="/all-plants"> 
                    <AllPlants isLoggedIn={user}/>
                </ReactRouterDOM.Route>

                <ReactRouterDOM.Route exact path="/plants/:plantName"> 
                    <AllVarietals />
                </ReactRouterDOM.Route>

                <ReactRouterDOM.Route exact path="/sign-up">
                    <SignUp setUser={onCreateUser}/>
                </ReactRouterDOM.Route>
                <ReactRouterDOM.Route exact path="/login">
                    <Login setUser={onLogin} />
                </ReactRouterDOM.Route>
                
                <ReactRouterDOM.Route exact path="/favorites">
                    <Favorites />
                </ReactRouterDOM.Route>
                <ReactRouterDOM.Route exact path="/logout">
                    <Homepage isLoggedIn={user} />
                </ReactRouterDOM.Route>
            </div>
        </React.Fragment>
    );
}

ReactDOM.render(<ReactRouterDOM.BrowserRouter>
        <App />
  </ReactRouterDOM.BrowserRouter>, document.querySelector('#root'));
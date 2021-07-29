import Homepage from './components/Homepage'
import SearchBar from './components/SearchBar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Favorites from './components/Favorites'
import Nav from './components/Nav'
import AllPlants from './components/AllPlants'
import AllVarietals from './components/AllVarietals'
import ReactDOM from 'react-dom'
import React from 'react'
import ReactRouterDOM from 'react-router-dom'

function App() {
    
    //const [searchTerm, setSearchTerm] = React.useState({});
    const [user, setUser] = React.useState(false);
    const [isValid, setValid] = React.useState([]);
    const [isNewUser, setNewUser] = React.useState([]);
    const history = ReactRouterDOM.useHistory();
    const [favorites,setFavorites] = React.useState([])
    //const { pathname } = ReactRouterDOM.useLocation();
   
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
            if(data.isLoggedIn==false){
                setValid(false)
                setUser(false)

            }
            else{
                setValid(true)
                setUser(true)
                setFavorites(favorites)
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
            setValid([])
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
            if(data.isUser==true){
                setNewUser(false)
            }
            else{
                setNewUser(true)
                setUser(true)
                history.push('/')
            }
            
        })
    }

    const onAddToFavorites = (name) => {
        fetch('/api/add-favorites',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'plant': name, 
            })
        })
        .then((response)=>response.json())
        .then((data)=>{
            setFavorites((favs)=>[...favs,data])
        })
    }

    const onRemoveFromFavorites = (name) => {
        const updatedFavorites = favorites.filter((fav)=>fav.name!=name) //select only where the condition is true
        setFavorites(updatedFavorites);
        fetch('/api/remove-favorite',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'plant': name, 
            })
            //.catch()
        })
    }

    React.useEffect(()=>{
        if(user){
            fetch('/api/show-favorites',{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response)=> response.json())
            .then((data)=>{
                setFavorites(data)   
            })
        }
    },[user]) 
    
    return (
        <React.Fragment>
            <div className="App">
                <Nav isLoggedIn={user} logUserOut={onLogout} />
                <ReactRouterDOM.Route exact path="/">
                    <Homepage isLoggedIn={user}/>
                    <SearchBar />
                </ReactRouterDOM.Route>

                <ReactRouterDOM.Route exact path="/all-plants"> 
                    <AllPlants isLoggedIn={user} 
                               favorites={favorites}
                               onAddToFavorites={onAddToFavorites}
                               onRemoveFromFavorites={onRemoveFromFavorites}/>
                </ReactRouterDOM.Route>

                <ReactRouterDOM.Route exact path="/plants/:plantName"> 
                    <AllVarietals />
                </ReactRouterDOM.Route>

                <ReactRouterDOM.Route exact path="/sign-up">
                    <SignUp setUser={onCreateUser} isNewUser={isNewUser}/>
                </ReactRouterDOM.Route>
                <ReactRouterDOM.Route exact path="/login">
                    <Login setUser={onLogin} isValid = {isValid} />
                </ReactRouterDOM.Route>
                
                <ReactRouterDOM.Route exact path="/favorites">
                    {(user)? 
                            <Favorites 
                                isLoggedIn={user}
                                favorites={favorites} 
                                onAddToFavorites={onAddToFavorites}
                                onRemoveFromFavorites={onRemoveFromFavorites}
                            />
                            :
                            <ReactRouterDOM.Redirect to="/login"/> 
                    }
                </ReactRouterDOM.Route>
                <ReactRouterDOM.Route exact path="/logout">
                    <Homepage isLoggedIn={user} />
                </ReactRouterDOM.Route>
            </div>
        </React.Fragment>
    );
}

export default App;
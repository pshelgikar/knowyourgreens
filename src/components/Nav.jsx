export default function Nav(props){
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

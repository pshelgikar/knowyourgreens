import React from "react";
import { NavLink } from "react-router-dom";
import { Nav,Tab } from 'react-bootstrap';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

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
                <NavLink to="/">
                    <li>Home</li>
                </NavLink>
                <NavLink to="/all-plants">
                    <li>All Plants</li>
                </NavLink>
                <NavLink to="/login">
                    {!isLoggedIn && 
                        (<li>Login</li>)
                    }
                </NavLink>
                <NavLink to="/sign-up">
                    {!isLoggedIn && 
                        (<li>Sign Up</li>)
                    }
                </NavLink>
                <NavLink to="/favorites">
                    {isLoggedIn && 
                        (<li>My Favorites</li>)
                    }
                </NavLink>
                <NavLink to="/logout" onClick = {onLogout}>
                    {isLoggedIn &&
                        (<li>Logout</li>)
                    }
                </NavLink>
            </ul>
        </nav>
    );
}

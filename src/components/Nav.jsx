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
                {!isLoggedIn && 
                    <NavLink to="/login">
                        <li>Login</li>
                    </NavLink>
                }
                {!isLoggedIn && 
                    <NavLink to="/sign-up">
                        <li>Sign Up</li>
                    </NavLink>
                }
                {isLoggedIn &&
                    <NavLink to="/favorites">
                        
                            <li>My Favorites</li>
                        
                    </NavLink>
                }
                {isLoggedIn &&
                    <NavLink to="/logout" onClick = {onLogout}>
                        
                            <li>Logout</li>
                    </NavLink>
                }
               
            </ul>
        </nav>
    );
}

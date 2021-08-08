import React from "react";
import {Button} from 'react-bootstrap';
export default function Login(props) {
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
        <div className="pageContents body-text bg-image login">
             {!isValid && 
                <div>Uh oh, login credentials don't look right..</div>}
            <h1>Log In</h1>
            <form onSubmit={handleSubmit} className='form-elements'>
                Enter Username<input type="text" name="username" autocomplete="off" required={true} onChange={handleUsername} />
                Password<input type="password" name="password" required={true} onChange={handlePassword}/>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}


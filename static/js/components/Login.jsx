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


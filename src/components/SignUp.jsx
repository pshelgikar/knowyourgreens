export default function SignUp(props) {
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

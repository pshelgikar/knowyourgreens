function App() {
    const [plants, getPlants] = React.useState({});
    const [searchTerm, setSearchTerm] = React.useState({});

    React.useEffect(()=>{
        fetch('/all-plants')
        .then((response)=>response.json())
        .then((data)=>{
            getPlants(data);
        })
    },[]);

    const onSearch = (plant) => {
        console.log(plant)
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


    return (
        <ReactRouterDOM.BrowserRouter>
            <div className="App">
                <Nav />
                <ReactRouterDOM.Route exact path="/">
                    <Homepage />
                    <SearchBar onSearch={onSearch} />
                    <Search searchTerm={searchTerm}/>
                </ReactRouterDOM.Route>

                <ReactRouterDOM.Route exact path="/all-plants">
                    <SearchBar onSearch={onSearch}/>
                    <AllPlants plants={plants} />
                    <Search searchTerm={searchTerm}/>
                </ReactRouterDOM.Route>

                <ReactRouterDOM.Route exact path="/sign-up">
                    <SignUp />
                </ReactRouterDOM.Route>

                <ReactRouterDOM.Route exact path="/login">
                    <Login />
                </ReactRouterDOM.Route>
                <ReactRouterDOM.Route exact path="/results">
                    
                </ReactRouterDOM.Route>

            </div>
        </ReactRouterDOM.BrowserRouter>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
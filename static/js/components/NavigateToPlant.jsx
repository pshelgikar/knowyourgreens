function NavigateToPlant(props){
    const {plant} = props;
    const history = ReactRouterDOM.useHistory();
    const onShowDetails = () => {
        history.push(`/plants/${plant.name}`) 
    }

    return(
        <div className="pageContents">
            <button onClick={onShowDetails}>View Details</button>
        </div>
    )
}
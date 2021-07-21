function AddToFavorites(props){
    const {isLoggedIn,fav,onAddToFavorites,onRemoveFromFavorites,name} = props;
    const onAddFavs = (evt) => {
        evt.preventDefault();
        onAddToFavorites(name)
    }

    const onRemoveFavs = (evt) => {
        evt.preventDefault();
        onRemoveFromFavorites(name)
    }
    

    return(
        <div className="pageContents"> 
            {(isLoggedIn) &&  
                (fav ? 
                    <button onClick={onRemoveFavs}>Remove from Favorites</button> :
                    <button onClick={onAddFavs}>Add to Favorites</button>)       
            }
        </div>
    )
}
import React from "react";
import { Button } from "react-bootstrap";

export default function AddToFavorites(props){
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
                    <Button onClick={onRemoveFavs} size="sm">Remove from Favorites</Button> :
                    <Button onClick={onAddFavs} size="sm">Add to Favorites</Button>)       
            }
        </div>
    )
}
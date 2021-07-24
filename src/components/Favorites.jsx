import PlantCard from './PlantCard'
import NavigateToPlant from './NavigateToPlant'

export default function Favorites(props){
    const {isLoggedIn, favorites, onAddToFavorites, onRemoveFromFavorites} = props;
    const favoritePlants = [];
    let isFav=false;
    let favCard = null;
    for(let fav in favorites){
        if(!favorites){
            isFav=false
        }
        else{
            isFav=true;
            for (const item of Object.entries(favorites[fav])){ 
                favCard = (
                    <div className="plant-card" key={favorites[fav]['plant_id']}>
                         <PlantCard
                            name = {favorites[fav]['name']}
                            img = {favorites[fav]['img']}
                            favorites = {favorites}
                            isLoggedIn = {isLoggedIn}
                            onAddToFavorites = {onAddToFavorites}
                            onRemoveFromFavorites = {onRemoveFromFavorites}
                        />
                          <NavigateToPlant plant={favorites[fav]} />
                    </div>
                  )
              }
          favoritePlants.push(favCard)
        }
      }
    return(
        
        <div className="pageContents">
            <div><h1>Favorites</h1></div>   
            {!isFav && 
                <div>This looks a little empty right now, add some plants to your list of favorites!</div>}
            <div>{favoritePlants}</div>
        </div>
        
    )
}
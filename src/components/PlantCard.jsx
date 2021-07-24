import AddToFavorites from './AddToFavorites'

export default function PlantCard(props){
    const {plant_id,name,img, isLoggedIn, favorites, onAddToFavorites, onRemoveFromFavorites} = props;
    let fav=false;
    for(let plant of favorites){
        if(plant['name']==name){
          fav = true;  
        }
    }

    //look into "includes"/verify keys

    return(
        <div key={plant_id} className="plant-card">
            <h2>{name}</h2>
            <img src={img}/>
            <AddToFavorites isLoggedIn={isLoggedIn} 
                            fav={fav} name={name} 
                            onAddToFavorites={onAddToFavorites}
                            onRemoveFromFavorites={onRemoveFromFavorites}
                            />
        </div>
    )
}

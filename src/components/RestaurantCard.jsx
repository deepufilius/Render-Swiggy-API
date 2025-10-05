import {IMG_URL} from "../utils/constants"

const RestaurantCard = (props)=>{

    const {name,cloudinaryImageId,areaName,cuisines,avgRating,sla} = props?.restaurant?.info;

    return(
        <div className="restro-card">
            <img className="restro-image" src={IMG_URL+cloudinaryImageId}/>
            <div className="restro-info">
                <h4 className="restro-title">{name}</h4>
                <h4>{avgRating} &middot; {sla.slaString}</h4>
                <p className="restro-cuisine">{cuisines.join(", ")}</p>
                <p>{areaName}</p>
            </div>
        </div>
    )
}

export default RestaurantCard;
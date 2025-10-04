import {IMG_URL} from "../utils/constants"

const RestaurantCard = (props)=>{

    const {name,cloudinaryImageId,areaName,cuisines,avgRating,sla} = props?.restaurant?.info;

    return(
        <div className="restro-card">
            <img className="restro-image" src={IMG_URL+cloudinaryImageId}/>
            <div className="restro-info">
                <h3>{name}</h3>
                <h4>{avgRating} &middot; {sla.slaString}</h4>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{areaName}</h4>
            </div>
        </div>
    )
}

export default RestaurantCard;
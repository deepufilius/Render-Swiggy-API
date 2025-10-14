import {IMG_URL} from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props)=>{

    const userData = useContext(UserContext);
    const {loggedInUser} = userData;

    const {name,cloudinaryImageId,areaName,cuisines,avgRating,sla} = props?.restaurant?.info;

    return(
        <div className="w-65">
            <div className="relative w-full overflow-hidden rounded-2xl">
                <img className="w-full h-40 object-cover" src={IMG_URL+cloudinaryImageId}/>
                <div className="absolute bottom-0 left-0 right-0 h-15 bg-gradient-to-t from-black to-transparent"></div>
            </div>
            <div className="restro-info">
                <h4 className="restro-title">{name}</h4>
                <h4>{avgRating} &middot; {sla.slaString}</h4>
                <p className="restro-cuisine">{cuisines.join(", ")}</p>
                <p>{areaName}</p>
                <p>User: {loggedInUser}</p>
            </div>
        </div>
    )
}

export const withRestaurantOffer = (RestaurantCard)=>{
    return(props)=>{
        const {header,subHeader} = props?.restaurant?.info?.aggregatedDiscountInfoV3;
        return(
            <div className="relative">
                <label className="absolute text-white text-lg font-extrabold px-3 top-32 z-10">{header} {subHeader}</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;
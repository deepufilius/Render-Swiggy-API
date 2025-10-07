import { useState,useEffect } from "react";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import SimmerMenu from "./SimmerMenu";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [resMenu, setResMenu] = useState([]);
    const {resID} = useParams();

    const fetchMenu = async()=>{
        const response = await fetch(MENU_URL+resID);
        const json = await response.json();

        //console.log(json.data.cards);

        const restaurantInfo = json.data?.cards[2]?.card?.card?.info;
        const allCards = json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

        const itemCards = allCards.filter(card=>{
            return card.card.card.itemCards;
        })

        //console.log(itemCards);

        setResInfo(restaurantInfo);        
        setResMenu(itemCards);
    }

    useEffect(()=>{
        fetchMenu();
    },[]);

    console.log(resMenu);

  return resInfo===null? <SimmerMenu/> : (
    <div className="restro-menu-container">
        <h1>{resInfo.name}</h1>
        <div className="menu-header">
            <p className="menu-rating">{resInfo.avgRatingString}({resInfo.totalRatingsString}) &middot; {resInfo.costForTwoMessage}</p>
            <p className="menu-cuisine">{resInfo.cuisines.join(", ")}</p>
            <p className="menu-area">{resInfo.areaName}</p>
        </div>
            {
                resMenu.map(category=>(
                    <div key={category.card.card.title}>
                        <h3>{category.card.card.title}</h3>
                        {
                            category.card.card.itemCards.map(items=>(
                                <RestaurantCategory key={items.card.info.id} info={items.card.info}/>
                            ))
                        }
                    </div>
                ))
            }
    </div>
  )
}

export default RestaurantMenu;
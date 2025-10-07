import { useState,useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resID)=>{
    const [resInfo, setResInfo] = useState(null);
    const [resMenu, setResMenu] = useState([]);
    
    const fetchMenu = async()=>{
        const response = await fetch(MENU_URL+resID);
        const json = await response.json();

        const restaurantInfo = json.data?.cards[2]?.card?.card?.info;
        const allCards = json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

        const itemCards = allCards.filter(card=>{
            return card.card.card.itemCards;
        })

        setResInfo(restaurantInfo);        
        setResMenu(itemCards);
    }

    useEffect(()=>{
        fetchMenu();
    },[]);

    return [resInfo,resMenu];
}

export default useRestaurantMenu;
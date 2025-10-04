import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/resData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const TopRestaurants = ()=>{

    const [allRestaurants,setAllRestaurants] = useState([]);
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    
    function handleReset(){
        setListOfRestaurants(allRestaurants);
    }

    function handleFilter(){
        const filteredRestaurants = listOfRestaurants.filter(restaurant=>{
            return restaurant.info.avgRating>4.3;
        })
        setListOfRestaurants(filteredRestaurants);
    }

    const handleFetch = async()=>{
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7216671&lng=83.2904248&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json();
        
        setAllRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    useEffect(()=>{
        handleFetch();
    },[]);

    return listOfRestaurants.length===0 ? <Shimmer/> : (
        <div className="top-restro-container">
            <div className="search-filter-container">
                <div className="search">
                    <input type="text" placeholder="Enter your fav restaurant..."/>
                </div>
                <div className="filter">
                    <button className="filter-btn" onClick={handleReset}>All</button>
                    <button className="filter-btn" onClick={handleFilter}>Ratings 4.0+</button>
                </div>
            </div>
            <div className="restro-container">
                {
                    listOfRestaurants.map(restaurant=>(
                        <RestaurantCard key={restaurant.info.id} restaurant={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}

export default TopRestaurants;
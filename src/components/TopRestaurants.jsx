import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/resData";
import { useState } from "react";

const TopRestaurants = ()=>{

    const [allRestaurants,setAllRestaurants] = useState(restaurants);
    const [listOfRestaurants,setListOfRestaurants] = useState(restaurants);
    
    function handleReset(){
        setListOfRestaurants(allRestaurants);
    }

    function handleFilter(){
        const filteredRestaurants = listOfRestaurants.filter(restaurant=>{
            return restaurant.info.avgRating>4.3;
        })
        setListOfRestaurants(filteredRestaurants);
    }

    return(
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
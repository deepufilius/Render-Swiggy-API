import RestaurantCard,{withRestaurantOffer} from "./RestaurantCard";
import restaurants from "../utils/resData";
import { useState,useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const TopRestaurants = ()=>{

    const [allRestaurants,setAllRestaurants] = useState([]);
    const [filteredList,setFilteredList] = useState([]);
    const [searchText,setSearchText] = useState("");
    const {loggedInUser, setUserName} = useContext(UserContext);
    
    const RestaurantOfferCard = withRestaurantOffer(RestaurantCard);

    function handleReset(){
        setFilteredList(allRestaurants);
    }

    function handleFilter(){
        const filteredRestaurants = allRestaurants.filter(restaurant=>{
            return restaurant.info.avgRating>4.3;
        })
        setFilteredList(filteredRestaurants);
    }

    const handleFetch = async()=>{
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7216671&lng=83.2904248&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json();
        
        setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(()=>{
        handleFetch();
    },[]);

    const handleSearch = ()=>{
        const searchList = allRestaurants.filter(restaurant=>{
            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
        })
        setFilteredList(searchList);
    }

    console.log(filteredList);

    return filteredList.length===0 ? <Shimmer/> : (
        <div className="top-restro-container">
            <div className="search-filter-container">
                <div className="search">
                    <input type="text" placeholder="Enter your fav restaurant..." value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                    <button className="filter-btn" onClick={handleSearch}>Search</button>
                </div>
                <div className="filter">
                    <label>User Name: </label>
                    <input type="text" className="border border-gray-400 rounded-2xl px-6 py-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
                    <button className="filter-btn" onClick={handleReset}>All</button>
                    <button className="filter-btn" onClick={handleFilter}>Ratings 4.0+</button>
                </div>
            </div>
            <div className="restro-container">
                {
                    filteredList.map(restaurant=>(
                        <Link className="transition-transform duration-200 ease-in-out hover:scale-95" key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
                            {
                                (restaurant.info.aggregatedDiscountInfoV3)?
                                <RestaurantOfferCard restaurant={restaurant}/>:
                                <RestaurantCard restaurant={restaurant}/>
                            }
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default TopRestaurants;
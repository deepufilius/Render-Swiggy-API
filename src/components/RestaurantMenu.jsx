import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import SimmerMenu from "./SimmerMenu";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

const RestaurantMenu = () => {
    const {resID} = useParams();
    const [resInfo,resMenu] = useRestaurantMenu(resID);
    const [showIndex, setShowIndex] = useState(0);

    if(resInfo === null){
        return <SimmerMenu/>;
    }

    const {name,avgRatingString,totalRatingsString,costForTwoMessage,cuisines,areaName} = resInfo;

    const handleShowList = (index)=>{
        showIndex === index ? setShowIndex(-1):setShowIndex(index);
    }

  return (
    <div className="max-w-[780px] mx-auto mt-20">
        <h1 className="font-extrabold text-2xl p-2">{name}</h1>
        <div className="rounded-4xl bg-gradient-to-t from-gray-300 via-gray-100 to-white p-4 mb-16">
            <div className="rounded-3xl p-5 bg-white border border-gray-300 ">
                <p className="font-bold mt-1.5">{avgRatingString}({totalRatingsString}) &middot; {costForTwoMessage}</p>
                <p className="font-semibold text-orange-600 underline mt-1.5">{cuisines.join(", ")}</p>
                <p className="font-semibold opacity-60 ">{areaName}</p>
            </div>
        </div>
        <div className="bg-gray-100 pt-4 space-y-4">
            {
                resMenu.map((category,index)=>(
                    <RestaurantCategory 
                        category={category} 
                        key={category.card.card.title} 
                        showList = {showIndex===index? true : false }
                        currentIndex = {index}
                        handleShowList= {handleShowList}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default RestaurantMenu;
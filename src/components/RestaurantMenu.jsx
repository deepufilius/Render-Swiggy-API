import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import SimmerMenu from "./SimmerMenu";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

const RestaurantMenu = () => {
    const [toggle,setToggle] = useState(false);
    const {resID} = useParams();
    const [resInfo,resMenu] = useRestaurantMenu(resID);

    if(resInfo === null){
        return <SimmerMenu/>;
    }

    const {name,avgRatingString,totalRatingsString,costForTwoMessage,cuisines,areaName} = resInfo;

    const handleToggle = ()=>{
        setToggle(!toggle);
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
                resMenu.map(category=>(
                    <div className=" bg-white" key={category.card.card.title}>
                        <div className="px-3 py-3.5 flex items-center justify-between cursor-pointer" onClick={handleToggle}>
                            <span className="font-bold">{category.card.card.title} ({category.card.card.itemCards.length})</span>
                            <span>{toggle?"⬆️":"⬇️"}</span>
                        </div>
                        <div className="px-2.5">
                            {
                                category.card.card.itemCards.map((items,index,cards)=>(
                                    toggle && <div key={items.card.info.id}>
                                        <RestaurantCategory info={items.card.info}/>
                                        {index <cards.length-1 && <hr className="bg-gray-300 border-0 h-[1px]"/>}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default RestaurantMenu;
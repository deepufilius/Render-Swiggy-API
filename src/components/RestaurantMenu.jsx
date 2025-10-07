import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import SimmerMenu from "./SimmerMenu";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resID} = useParams();

    const [resInfo,resMenu] = useRestaurantMenu(resID);

    if(resInfo === null){
        return <SimmerMenu/>;
    }

    const {name,avgRatingString,totalRatingsString,costForTwoMessage,cuisines,areaName} = resInfo;

  return (
    <div className="restro-menu-container">
        <h1>{name}</h1>
        <div className="menu-header">
            <p className="menu-rating">{avgRatingString}({totalRatingsString}) &middot; {costForTwoMessage}</p>
            <p className="menu-cuisine">{cuisines.join(", ")}</p>
            <p className="menu-area">{areaName}</p>
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
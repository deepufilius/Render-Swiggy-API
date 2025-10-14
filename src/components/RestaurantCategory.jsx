import RestaurantMenuList from "./RestaurantMenuList";
import { use, useState } from "react";

const RestaurantCategory = ({category,showList,currentIndex,handleShowList}) => {

  const {title,itemCards} = category?.card?.card;

  //const [showList,setShowList] = useState(false);

  /* const handleShowList = ()=>{
    setShowList(!showList);
  } */

  return (
      <div className=" bg-white">
        <div className="px-3 py-3.5 flex items-center justify-between cursor-pointer" onClick={()=>handleShowList(currentIndex)}>
            <span className="font-bold">{title} ({itemCards.length})</span>
            <span>{showList?"⬆️":"⬇️"}</span>
        </div>
        <div className="px-2.5">
              {
                showList && itemCards.map((items,index,itemCards)=>(
                    <div key={items.card.info.id}>
                        <RestaurantMenuList info={items.card.info}/>
                        {index <itemCards.length-1 && <hr className="bg-gray-300 border-0 h-[1px]"/>}
                    </div>
                ))
              }
        </div>
      </div>
  )
}

export default RestaurantCategory;
import { MENU_IMG_URL } from "../utils/constants";

const RestaurantMenuList = ({info}) => {

    console.log(info);
    const {name,price,defaultPrice,description,imageId,ratings} = info;
    const {rating,ratingCountV2} = ratings?.aggregatedRating;


  return (
      <div className="flex justify-between items-baseline-last pt-3.5 mb-1">
        <div className="w-[70%] my-4">
          <p className="font-bold opacity-70">{name}</p>
          <p className="font-bold">₹ {defaultPrice?defaultPrice/100:price/100}</p>
          {rating && <p className="text-sm text-gray-700 font-medium my-2.5 ">⭐{rating} ({ratingCountV2})</p>}
          <p className="line-clamp-2 font-semibold text-gray-600">{description}</p>
        </div>
        {
          imageId ? (
            <div className="w-40 relative">
              <img className="w-full h-30 overflow-hidden object-cover rounded-2xl" src={MENU_IMG_URL+imageId} alt="item-image" />
              <button className="absolute -bottom-[10px] cursor-pointer left-6 text-green-600 border-1 border-gray-400 font-semibold shadow-lg bg-white px-10 py-1 rounded-sm ">Add</button>
            </div>
          ) : (
            <div className="w-40 relative">
                <button className="absolute bottom-[10px] cursor-pointer left-6 text-green-600 border-1 border-gray-400 font-semibold shadow-md bg-white px-10 py-1 rounded-sm ">Add</button>
            </div>
          )
        }
      </div>
  )
}

export default RestaurantMenuList;
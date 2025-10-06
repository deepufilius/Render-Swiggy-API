
const RestaurantCategory = ({info}) => {

    const {name,price,defaultPrice} = info;

  return (
    <p>
        <span>{name}</span> -- <span>{defaultPrice?defaultPrice/100:price/100}</span>
    </p>
  )
}

export default RestaurantCategory;
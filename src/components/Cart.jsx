import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector(store=>store.cart.items);

    const dispatch = useDispatch();

    const handleRemoveItem = (index)=>{
        dispatch(removeItem(index));
    }

  return (
    <div className="mt-10 max-w-[780px] mx-auto">
        <h1 className="text-center text-2xl font-bold">Cart Summary</h1>
        <div className="flex justify-between items-center mt-3.5 shadow-md px-2.5 py-1.5 rounded-lg"> 
            <p>Items List</p>
            <button className="bg-black text-white px-2 py-1 rounded-sm">Clear Cart</button>
        </div>
        <div className="mt-2.5 px-2.5 border border-gray-400 rounded-lg min-h-75">
            {cartItems.length === 0 ? <div className="h-75 flex items-center justify-center"><h1 className="">Empty Cart</h1></div> : 
                <div>
                    {
                        cartItems.map((items,index,cartItems)=>(
                            <div key={items.id}>
                                <div className="flex justify-between my-1 px-1">
                                    <div>{items.name}</div>
                                    <div>
                                        <span className="mr-5">{items.price/100}</span>
                                        <span className="border border-black rounded-lg px-2 py-1"><button onClick={()=>handleRemoveItem(index)}>Delete</button></span>
                                    </div>
                                </div>
                                {index < cartItems.length -1 && <hr/>}
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    </div>
  )
}

export default Cart;
import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = ()=>{

    const [toggle,setToggle] = useState(true);

    const onlineStatus = useOnlineStatus();

    const userData = useContext(UserContext);

    const cartItems = useSelector(store=>store.cart.items);

    const handleLogin = ()=>{
        toggle === true? setToggle(false) : setToggle(true);
    }

    return(
        <div className="shadow-md">
            <div className="flex-nav max-w-[1200px] mx-auto">
                <div className="h-20">
                    <img className="h-full" src={LOGO_URL}/>
                </div>
                <div className="nav-items">
                    <ul className="flex-nav">
                        <li>Online Status: {onlineStatus?"🟢":"🔴"}</li>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/about"}>About Us</Link></li>
                        <li><Link to={"/contact"}>Contact Us</Link></li>
                        <li><Link to={"/grocery"}>Grocery</Link></li>
                        <li><Link to={"/cart"}>Cart ({cartItems.length}) </Link></li>
                        <button className="font-bold bg-white border-0 cursor-pointer opacity-60" onClick={handleLogin}>{toggle?"Sign In":"Logout"}</button>
                        <li className="ml-1.5">{userData.loggedInUser}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;
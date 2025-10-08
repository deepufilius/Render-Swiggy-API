import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=>{

    const [toggle,setToggle] = useState(true);

    const onlineStatus = useOnlineStatus();

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
                        <li>Cart</li>
                        <button className="font-bold bg-white border-0 cursor-pointer opacity-60" onClick={handleLogin}>{toggle?"Sign In":"Logout"}</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;
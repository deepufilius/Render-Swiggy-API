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
        <div className="header">
            <div className="header-container">
                <div className="logo-container">
                    <img className="logo" src={LOGO_URL}/>
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Online Status: {onlineStatus?"🟢":"🔴"}</li>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/about"}>About Us</Link></li>
                        <li><Link to={"/contact"}>Contact Us</Link></li>
                        <li><Link to={"/grocery"}>Grocery</Link></li>
                        <li>Cart</li>
                        <button className="login" onClick={handleLogin}>{toggle?"Sign In":"Logout"}</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;
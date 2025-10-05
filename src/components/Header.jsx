import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = ()=>{

    const [toggle,setToggle] = useState(true);

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
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                        <button className="login" onClick={handleLogin}>{toggle?"Sign In":"Logout"}</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;
import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=>{
    return(
        <div className="header">
            <div className="header-container">
                <div className="logo-container">
                    <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0byS4i_Yw5vi8r-Eu-mDk57CMe5kiDI1cTw&s"/>
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const TopItems = ()=>{
    return(
        <div className="top-items-container">
            <h3><b>What's on your mind?</b></h3>
            <div className="img-scroll">
                <p>Biryani</p>
                <p>Cakes</p>
                <p>Noodles</p>
                <p>Punugulu</p>
                <p>Pizzas</p>
                <p>Rolls</p>
                <p>Shake</p>
                <p>Shawarma</p>
                <p>Samosa</p>
                <p>Burgers</p>
                <p>Dosa</p>
                <p>Idli</p>
            </div>
        </div>
    )
}

const RestaurantCard = ()=>{
    return(
        <div className="restro-card">
            <img className="restro-image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/b621381e-9ecf-431a-b9d3-d6c6b42ffffe_61913.JPG"/>
            <div className="restro-info">
                <h3>Pizza Hut</h3>
                <h4>4.4 &middot; 20-25 mins</h4>
                <h4>Pizzas</h4>
                <h4>Dwaraka Nagar</h4>
            </div>
        </div>
    )
}

const TopRestaurants = ()=>{
    return(
        <div className="top-restro-container">
            <div className="search">Search</div>
            <div className="restro-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

const Body = ()=>{
    return(
        <div className="body">
            <TopItems/>
            <TopRestaurants/>
        </div>
    )
}


const AppLayout = ()=>{
    return(
        <>
            <Header/>
            <Body />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
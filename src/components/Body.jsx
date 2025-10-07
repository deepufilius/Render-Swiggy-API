import TopItems from "./TopItems";
import TopRestaurants from "./TopRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = ()=>{

    const onlineStatus = useOnlineStatus();

    return onlineStatus===false? 
        (
            <div className="offline">
                <h1>You're currently offline. Check your network connection!!</h1>
            </div>
        )
     :(
        <div className="body">
            <TopItems/>
            <TopRestaurants/>
        </div>
    )
}

export default Body;
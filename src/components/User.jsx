import { useState } from "react";

const User = (props) => {

    const [power,setPower] = useState(100);
    const [local,setLocal] = useState(224);
    const {name,location} = props;

    const handleCardBtn = ()=>{
        setPower(prev=>prev+1);
    }

  return (
    <div className="user-card">
        <h3 className="user-card-title">Functional Component</h3>
        <div className="user-card-info">
            <h4>Name: {name}</h4>
            <h4>Location: {location}</h4>
            <h4>PowerState(PS): {power}</h4>
            <h4>LocalPull(LP): {local}</h4>
            <button className="user-card-btn" onClick={handleCardBtn}>Increase PS</button>
        </div>
    </div>
  )
}

export default User;
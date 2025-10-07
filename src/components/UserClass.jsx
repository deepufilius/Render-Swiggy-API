import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        console.log("Child Constructor");

        this.state={
            power: 200,
            local: 345
        }
    }

    componentDidMount(){
        console.log("Child Component Did Mount");
    }

    render(){
        console.log("Child render");
        const {name,location} = this.props;
        const {power,local} = this.state;

        const handleCardBtn = ()=>{
            this.setState({
                power: power+1
            })
        }

        return(
            <div className="user-card">
                <h3 className="user-card-title">Class Component</h3>
                <div className="user-card-info">
                    <h4>Name: {name}</h4>
                    <h4>Location: {location}</h4>
                    <h4>PowerState: {power}</h4>
                    <h4>LocalPull: {local}</h4>
                    <button className="user-card-btn" onClick={handleCardBtn}>Increase PS</button>
                </div>
            </div>
        )
    }
}

export default UserClass;
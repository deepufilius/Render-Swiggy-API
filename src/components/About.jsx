import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserGithub from "./UserGithub";
import UserContext from "../utils/UserContext";

class About extends Component {

  constructor(props){
    super(props);

    console.log("parent constructor");
  }

  componentDidMount(){
    console.log("Parent Component Did Mount");
  }

  render(){

    console.log("Parent Render");

      return (
        <div className="about-page">
          <h1 className="about-title">This is about me.</h1>
          <UserContext.Consumer>
            {({loggedInUser})=><h2 className="text-center my-5">{loggedInUser}</h2>}
          </UserContext.Consumer>
          <div className='about-container'>
              <User name={"Kekarot"} location={"Blue Land"}/>
              <UserClass name={"Vegita"} location={"Black Vally"}/>
              <UserGithub/>
          </div>
        </div>
      )
  }
}

export default About;
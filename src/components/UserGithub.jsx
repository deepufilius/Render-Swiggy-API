import {Component} from "react";
import { GITHUB_URL } from "../utils/constants";

class UserGithub extends Component{
    constructor(props){
        super(props);

        this.state={
            userInfo:null
        }
    }

    //this lifecycle method once render method is mounted to DOM
    async componentDidMount(){
        const response = await fetch(GITHUB_URL);
        const json = await response.json();

        this.setState({
            userInfo:json
        })
    }

    //this lifecycle method is called after ComponentDidMount
    componentDidUpdate(){
        console.log("Component Did Update");
    }

    //this lifecycle method is called after the component is unmounted
    //means when you route to a new page
    componentWillUnmount(){
        console.log("Component will Unmount");
    }

    render(){
        if(this.state.userInfo === null){
            return <div>Loading...</div>
        }   

        const {name,avatar_url,location,public_repos} = this.state.userInfo;

        return(
            <div className="user-git-card">
                <div className="user-git-img">
                    <img src={avatar_url} alt="github-profile" />
                </div>
                <div className="user-git-info">
                    <h4 className="github-header">GitHub User</h4>
                    <p>Name: {name}</p>
                    <p>Location: {location}</p>
                    <p>Public Repos: {public_repos}</p>
                </div>
            </div>
        )
    }
}


export default UserGithub;
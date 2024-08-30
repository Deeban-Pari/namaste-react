import React from "react";
import { User_Img } from "../utils/constants";

class UserClass extends React.Component{
    //name-> using props got this name from parent component(About.js-><UserClass/>). And here we destructure them on fly. 
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Dummy",
            },
        }
        // Createing state.
        // console.log(props);
        // console.log('Child Constructor');
    }
    async componentDidMount(){
        //console.log('Child DidMount');
        const data=await fetch('https://api.github.com/users/Deeban-Pari');
        const json=await data.json();
        this.setState({
            userInfo:json,
        })
        console.log(json);
    }
    render(){
        const{login,location}=this.state.userInfo
        //console.log('Child Render');
        return(
            <div className="user-card1">
            <img src={User_Img} className="user-logo"></img> 
            <h3>Name: {login}</h3>
            {/* Using state here inside JSX(HTML) */}
            <h4>Location: {location}</h4>
            {/* <button onClick={()=>{
                // This is not recommended. Never ever try to update state varable directly
                // const count=this.state.age=this.state.age+1;
                // console.log(count);

                //Use this Approach:
                this.setState({
                    age:this.state.age+1,
                })
            }}>Click</button> */}
            <h4>Location: Sholinghur</h4>
            <h5>Contact: +91 6379982402</h5>
            </div>
        )
    }
}

export default UserClass;
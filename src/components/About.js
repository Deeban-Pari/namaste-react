import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// const About=()=>{
//     return(
//         <div>
//             <h2>Welcome to About Us Page</h2>
//             <div className="Userdetails">
//                 <User name={"DeebanPari from (functional)"}/>
//                 </div>
//                 <div className="Userdetails1">
//                 <UserClass name={"VinothSrinivasan from (class)"}/>
//                 </div>
//         </div>
//     )
// }

class About extends React.Component{
    constructor(props){
        super(props);
        //console.log('Parent Constructor');
    }
    async componentDidMount(){
        //console.log('Parent DidMount');
    }
    render(){
        //console.log('Parent Render');
        return(
                    <div>
                        <h2>Welcome to About Us Page</h2>
                        <div className="Userdetails">
                            <User name={"DeebanPari from (functional)"}/>
                            </div>
                            <div className="Userdetails1">
                            <UserClass name={"VinothSrinivasan from (class)"}/>
                            </div>
                    </div>
                )
    }
}

export default About;
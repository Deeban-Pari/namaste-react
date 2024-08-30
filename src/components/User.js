import { User_Img } from "../utils/constants";
import { useState } from "react";

//name-> using props got this name from parent component(About.js-><User/>). And here we destructure them on fly. 
const User=({name})=>{
    // Using of state variable
    const [age] = useState(23);
    return (
        <div className="user-card">
        <img src={User_Img} className="user-logo"></img> 
        {/* Here we destructure them on fly so directly using here */}
        <h3>Name: {name}</h3>
        <h4>Age: {age}</h4>
        <h4>Location: Sholinghur</h4>
        <h5>Contact: +91 6379667199</h5>
        </div>
    );
};

export default User;
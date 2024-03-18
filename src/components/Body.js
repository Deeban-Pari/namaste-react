import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body=()=>{

    // Array Destruectering concept. We are using here as well for 'useState' :
    // const arr=useState(resList);
    // const [listOfResturants,setlistOfResturants]=arr;

    // Local state variable - Super Powerful variable
    // To update this just use like 'set+The name of the state variable'. Ex: setlistOfResturants
    const [listOfResturants,setlistOfResturants]=useState(resList
    );
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    filteredListOfResturants=listOfResturants.filter((res)=>
                    res.info.avgRating > 4
                    );
                    // Here just updating the value for 'setlistOfResturants' with the filteredListOfResturants
                    setlistOfResturants(filteredListOfResturants);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    // Using Map to iterate to array. Don't forget to include Key most important
                    listOfResturants.map((restaurant)=> <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
}

export default Body;
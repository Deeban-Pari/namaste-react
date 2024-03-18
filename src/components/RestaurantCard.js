import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
    // Concept of Destructering
     const {resData}=props;
    // For Code Optimization
     const{cloudinaryImageId, name, cuisines, avgRating}=resData.info;
    return (
        <div className="res-card">
            <img className="res-card-img" src={CDN_URL+cloudinaryImageId}/>
            <h3>Res Name: {name}</h3>
            <h4>Cusines: {cuisines.join(",")}</h4>
            <h4>Rating: {avgRating} Stars</h4>
        </div>
    )
}

export default RestaurantCard;
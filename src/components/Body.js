import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {

     // Array Destruectering concept. We are using here as well for 'useState' :
    // const arr=useState(resList);
    // const [listOfResturants,setlistOfResturants]=arr;
    //listOfResturants- name of the state variable
    // Local state variable - Super Powerful variable
    // To update this just use like 'set+The name of the state variable'. Ex: setlistOfResturants
    const [listOfResturants, setlistOfResturants] = useState([]);

    const [filteredResturants, setFilteredResturants] = useState([]);
    // Here we used loading and it's setter setLoading to maintain the state of loading in the UI. untill data from API loading will display and after that API response(data) will be displayed
    const [loading, setLoading] = useState(true);

    const [searchText, setSearchText] = useState("");

    //whenever state variables update, react triggers a reconcilation cycle(re-renders the component)

      // useEffect- Same Like useState. As soon as component render cycle complets then immidietly the useEffect with arrow function will be called

    useEffect(() => {
        fetchData();
    }, []);
    //since we are using fetch this will return us a promise. To resolve this we used async and await. We can also use .then function as well to resolve the promise
    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await data.json();
            console.log(json);
            
            // Extract the array of restaurants from the API response
            // This last line '||' is an 'OR' operator.
            //|| []: The logical OR (||) operator is used here as a fallback. If the expression on the left side of the || evaluates to a falsy value (in this case, undefined), the right side of the || will be returned. In this case, if restaurants is undefined, an empty array [] will be returned instead.
            //So, overall, this line of code ensures that restaurants contains an array of restaurant data retrieved from the API response. If the data is not available or if there was an error fetching it, restaurants will default to an empty array.
            const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            const filtered= json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            
            setlistOfResturants(restaurants);
            setFilteredResturants(filtered)
            setLoading(false);
            console.log(restaurants);
            console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[1].info.name);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };
//Conditional Rendering
    // if (loading) {
    //     return <Shimmer/>;
    // }
    //Instead of using a seperate logic we used 'Ternery' operator if loading(means empty array) give(Shimer) else(:) then body component
    return loading? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className="search-btn" onClick={()=>{
                        //Filter by search on restaurant cards and update the UI
                        //Search text. Here we need the value of search text which we type from inputbox. We need to bind it. So maintain a local variable and track it.
                        console.log(searchText);
                        const filteredResturants = listOfResturants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredResturants(filteredResturants);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredListOfResturants = listOfResturants.filter((res) =>
                        res.info.avgRating > 4
                    );
                      // Here just updating the value for 'setlistOfResturants' with the filteredListOfResturants
                    setlistOfResturants(filteredListOfResturants);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
            {/* Using Map to iterate to array. Don't forget to include Key most important */}
                {filteredResturants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;

import ItemList from "./ItemList.js"

const RestaurantFilter = ({data,showOrNot,setVisibleFn})=>{



   console.log(data+" "+showOrNot+" "+setVisibleFn);
   


   return (
    <div>

    <h2 >{type}</h2>
    <button onClick = {()=>{setVisibleFn()}}>click me</button>


   {visible1==true && <ItemList/>}
   </div>
   );

}


export default RestaurantFilter;
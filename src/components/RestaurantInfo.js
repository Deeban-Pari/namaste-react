import RestaurantFilter from "./RestaurantFilter";
import { useState } from "../../node_modules/react";

const RestaurantInfo = () => {

const arr =["Recommendation","VegFood"];

const [visible,setVisible] = useState(0);

return (
    <div>

    <h1> Briyani SPOT RESTAURANT</h1>
    
    {
    arr.map((element,index)=>{
        
      return <RestaurantFilter data={element} showOrNot={index==visible? true:false} setVisibleFn= {()=>{setVisible(index)}} />
    
    
    //  0Th ITERATION:
    // ----------------
    // <RestaurantFilter data="Recommedation" showOrNot={0==0 so true will be passed} setVisibleFn= {()=>{setVisible(0)}} />


    // 1st ITERATION:
    // ----------------
    // <RestaurantFilter data="VegFood" showOrNot={1!=0 so tfalse  will be passed} setVisibleFn= {()=>{setVisible(1)}} />



    // so for 1st component items will be visible and for 2nd no items will be visible.

// BUT then when user clicks on 1st component (not 0)then on "setVisibleFn" that we passed here will be called
//  and it will update the state  
    
    })
    }

</div>

)
};



export default RestaurantInfo;
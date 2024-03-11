import React from "react";
import  ReactDOM  from "react-dom/client";

const root=ReactDOM.createRoot(document.getElementById("root"));
const jsxHeading=<h1 id="heading">Hello DeebanChakravarthiPari</h1>
root.render(jsxHeading);// to render element

// creting Functional Component:

const Title=()=>{
    return (<h1 className="heading">Hello  from Title Component</h1>);
}

// or. Here without return and arrow function syntax
const number=1000;
//Component rendering/Component Composition
const HeadingComponent=()=>
     (
     <div id="container">
        {/* using js inside component */}
        {Title()}
        {/* <Title/> */}
        <h1 className="heading">Hello DeebanPari from Heading Component</h1>
     </div>);


root.render(<HeadingComponent/>);// to render components(Here Functional Component)
//root.render(<HeadingComponent1/>);
import { useRouteError } from "react-router-dom";

// this above package 'useRouteError' gives detailed info of error like statuscode, message... default package already there.
const Error=()=>{
    // Just like this we can assign here and grt it
    const err=useRouteError();
    return(
        <div>
            <h1> OOPS! Something Went Wrong </h1>
            {/* below one gives 404 not found as o/p */}
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    )
}

export default Error;
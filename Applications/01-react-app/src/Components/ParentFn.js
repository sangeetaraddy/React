import React from "react";
import ChildFn from "./ChildFn";
const ParentFn =(props) =>
{
 return(
    <div>
        <ChildFn dataFromParent="Passing the data using props"/>
    </div>
 )
}

export default ParentFn;
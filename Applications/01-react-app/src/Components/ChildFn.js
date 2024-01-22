import React from "react";

const ChildFn =(props) =>
{
 return(
    <div>
        <h1>we are learning:
            {props.dataFromParent}
        </h1>
    </div>
 )
}

export default ChildFn;
import React from "react";
import Child from "./Child";

class Parent extends React.Component {
    render() {
        return (
            <div>
                <Child dataFromParent="Passing the data using props"/>
            </div>
        )
    }
}

export default Parent;
import React from "react";

class Event1 extends React.Component {
    click() {
        alert("you clicked the button");
    }
    render() {
        return (
            <button onClick={this.click}>click here</button>
        )
    }
}
export default Event1;
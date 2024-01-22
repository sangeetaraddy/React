import React from "react";

class Component2 extends React.Component {
    constructor() {
        super();
        this.state={subject:"React Certification Course!"}
    }
    render() {
        return (
            <h2>
                Welcome to {this.state.subject}
            </h2>
        )
    }
}

export default Component2;
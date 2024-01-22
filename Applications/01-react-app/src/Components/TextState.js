import React from "react";

class TextSate extends React.Component {
    constructor() {
        super();
        this.state = { text: "Welcome Participants" }
    }
    changeText(){
       
        this.setState({text:"This is a React session"});
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.text}
                </h1>
                <button onClick={()=>this.changeText()}>Change Text</button>
            </div>
        )
    }
}

export default TextSate;
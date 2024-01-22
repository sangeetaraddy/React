import React from "react";

class Form1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'abc',
            roll_no: null,
            errorMessage: ''
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        alert(this.state.username + ' has been successfully registered!');
    }
    myChangeHandler = (event) => {
        let fieldName = event.target.name;
        let fieldvalue = event.target.value;
        let err = '';
        if (fieldName === "roll_no") {//check with value and datatype
            if (fieldvalue !== "" && !Number(fieldvalue)) {
                err = <strong>Your roll_no must be a number</strong>
            }
        }
        this.setState({ errorMessage: err });
        this.setState({ [fieldName]: fieldvalue });
    }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <h1>Hello {this.state.username}</h1>
                <p>Register with your name:</p>
                <input type="text" name='username' onChange={this.myChangeHandler} />

                <p>Enter your Roll No:</p>
                <input type="text" name='roll_no' onChange={this.myChangeHandler} />
                <br />
                <br />
                <input type="submit" value="submit" />
                <br />
                {this.state.errorMessage}
                <br />
                {this.state.roll_no}
            </form>
        )
    }
}

export default Form1;
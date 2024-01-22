import React from "react";
import { Component } from "react";

class Header extends Component {
    constructor() {
        super()
        this.state = {
            title: 'React App',
            userInput: 'Plz.enter the Product to search'
        }
    }
    inputChange=(event)=>{
        this.setState({userInput:event.target.value?event.target.value:'plz.enter the product to search'})
    }
    render(){
        return(
            <div>
                <center>
                    <h1>Music Store</h1>
               <center>
                <input placeholder="Product to search" onChange={this.inputChange}/>
               </center>
               <p>{this.state.userInput}</p>
                </center>
            </div>
        )
    }
}

export default Header;
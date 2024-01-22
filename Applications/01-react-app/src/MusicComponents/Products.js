import React, { Component } from "react";

import JSON from './db1.json';
import ProductsList from "./ProductList";

class Products extends Component{
    constructor(){
        super();
        this.state={
            title:'Products Page',
            products:JSON
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.title}</h2>
                <ProductsList prodlist={this.state.products}/>
            </div>
        )
    }
}

export default Products;
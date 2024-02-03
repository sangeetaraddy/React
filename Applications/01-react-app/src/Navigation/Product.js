import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
    return (
        <div>
            <h1>Product</h1>
            <strong> Select a Product</strong>
            <ul>
                <li>
                    <Link to="/Product/Secrete,Alchemist,SCOOP">Books</Link>
                </li>
                <li>
                    <Link to="/Product/Adgel,Trimax,Cello">Pens</Link>
                </li>
            </ul>
        </div>
    )
}

export default Product;
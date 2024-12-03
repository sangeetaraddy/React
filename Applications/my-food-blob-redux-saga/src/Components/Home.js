import React, { useEffect } from "react";
import FoodGrid from "./FoodGrid";
import './../App.css';
import { getFoods } from '../actions';
import { connect, useDispatch } from 'react-redux';

let Home = ({ tempValue }) => {
    return (
        <div>
            <div className="container-fluid" style={{ marginTop: "80px" }}>
                <div className='row'>
                    <div className='col-md-5'>
                    </div>
                    <div className='col-md-3 pt-4 pb-4'>
                        <h3>Popular Recipes</h3>
                        <center>
                            <button onClick={tempValue} className="btn btn-success">  
                              
                                Click to Display foods
                            </button>  
                            {/* click calls "getProducts()" that triggers action type 
                                 "GET_PRODUCTS" in ../actions/index.js imported above*/}
                        </center>
                    </div>
                </div>
                <div className='row' style={{ background: "#e0eaf6" }}>
                    <FoodGrid></FoodGrid>
                </div>
            </div>
        </div>
    )

}
//const mapDispatchToProps = { Home: getFoods };//to displayon page load
const mapDispatchToProps = { tempValue: getFoods };//to display on button click
Home = connect(null, mapDispatchToProps)(Home);
export default Home;
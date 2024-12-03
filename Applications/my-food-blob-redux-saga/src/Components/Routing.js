import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import FoodDetails from "./FoodDetails";
import Header from "./Header";

const Routing = () => {
    return (
        <BrowserRouter>
            <div>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/Home" element={<Home/>}></Route>
                    <Route path="/FoodDetails/:id" element={<FoodDetails/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>

    )
}

export default Routing;
import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from "./Header";
import Home from './Home';

class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header></Header>
                    <Routes>
                        <Route path="/" Component={Home} ></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        )
    }
}
export default Routing;
import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "../container/Home";
import LastestMovies from "./LatestMovies/LastestMovies";


class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" Component={Home}></Route>
                        <Route path="/home" Component={Home}></Route>
                        <Route path="/latestmovies" Component={LastestMovies}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        )
    }
}
export default Routing;
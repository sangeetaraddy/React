import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "../container/Home";
import LastestMovies from "./LatestMovies/LastestMovies";
import MovieDetails from "./LatestMovies/MovieDetails";


class Routing extends Component {
    render() {
        return (
 
                <div>
                    <Routes>
                        <Route path="/" Component={Home}></Route>
                        <Route path="/home" Component={Home}></Route>
                        <Route path="/latestmovies" Component={LastestMovies}></Route>
                        <Route path="/movie/:id" Component={MovieDetails}></Route>
                    </Routes>
                </div>
         
        )
    }
}
export default Routing;
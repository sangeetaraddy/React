import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';
import Posts from './Posts';
import Home from './Home';
import Forms from './Forms';
import Profile from './Profile';
import PostsDetails from './postsDetails';



class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <header>
                        <nav className="navbar navbar-inverse">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <Link to="/" className="navbar-brand">Edureka</Link>
                                </div>
                                <div className="collapse navbar-collapse" id="myNavbar">
                                    <ul className="nav navbar-nav">
                                        <li> <Link to="/">Home</Link></li>
                                        <li><Link to="/posts">Posts</Link></li>
                                        <li><Link to="/profile">Profile</Link></li>
                                        <li><Link to="/forms">Forms</Link></li>

                                    </ul>
                                </div>
                            </div>
                        </nav>




                    </header>
                    <Routes>
                        <Route path="/" Component={Home} ></Route>
                        <Route path="/posts" Component={Posts} ></Route>
                        <Route path="/post/:topic" Component={PostsDetails} ></Route>
                        <Route path="/profile" Component={Profile} ></Route>
                        <Route path="/forms" Component={Forms} ></Route>
                    </Routes>

                </div>
            </BrowserRouter>
        )
    }
}
export default Routing;
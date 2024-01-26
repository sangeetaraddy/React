import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from "./Header";
import Home from './Home';
import EnquireForm from "./EnquireForm";
import UserEnquiries from "./UserEnquiries";

class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header></Header>
                    <Routes>
                        <Route path="/" Component={Home} ></Route>
                        <Route path="/Enquire/:courseId" Component={EnquireForm} ></Route>
                        <Route path="/EnquiriesList" Component={UserEnquiries}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        )
    }
}
export default Routing;
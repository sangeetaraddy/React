import React, { Component } from "react";
import './Home.css';
import JSON from './db1.json';
import CourseList from "./CourseList";

const url="http://localhost:6700/course";

class Home extends Component {
    constructor() {
        super();
        this.state = { data: {} };
    }
    componentDidMount()
    {
        fetch(url,{method:'GET'})
        .then((response)=>response.json())
        .then((data)=>{
            this.setState({course:data})
        })
    }

    render() {

        return (
            <div>
                <div className="section page-banner-section">
                    <div className="container">
                        <div className="page-banner-content">
                            <h2 className="title">Course List</h2>
                            <h4 className="title">Live className with life time access to recordings</h4>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h2 className="home_page_title_section">List Of Courses</h2>
                    <div className="row">
                        <CourseList data={this.state.course}></CourseList>
                    </div>
                </div>
            </div>

        )
    }
}

export default Home;
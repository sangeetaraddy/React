import React, { Component } from "react";
import './Home.css';
import JSON from './db1.json';
import CourseList from "./CourseList";


class Home extends Component {
    constructor() {
        super();
        this.state = { data: JSON };
    }
    renderCourseList = ({ courseList }) => {
        if (courseList) {
            return courseList.map((data) => {
                return (
                    <div key={data.id} className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <div className="course_card_info">
                            <p>
                                <h3 className="title">
                                    {data.title}
                                </h3>
                                <div class="topic_more">
                                    {data.details}
                                </div>
                                <h4>Whats Included</h4>
                                <ul class="you_will_get ">
                                    <li>includes.name</li>
                                </ul>
                                <button>View Course Details</button>
                            </p>
                        </div>
                    </div>
                );
            });
        }
    };
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
                        <CourseList data={this.state.data}></CourseList>
                    </div>
                </div>
            </div>

        )
    }
}

export default Home;
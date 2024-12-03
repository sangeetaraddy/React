import React, { useEffect } from "react";
import './Home.css';
import CourseList from "./CourseList";
import { useDispatch,useSelector } from "react-redux";
import { getCourses } from "../State/courseSlice";

const Home =()=>{
    const course = useSelector((state)=>state.course.courses);
    console.log("course",course);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getCourses());
    }, [dispatch])
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
                    <CourseList></CourseList>
                </div>
            </div>
        </div>

    )
} 
export default Home;
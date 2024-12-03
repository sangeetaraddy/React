import React from "react";
import './Home.css';
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

const CourseList = () => {
    const data = useSelector((state)=>state.course.courses);
    if (data) {
        return data.map((data) => {
            const displayWhatincludes = data.includes.map((i) => {
                return (
                    <div key={i.id}>
                        <li>{i.name}</li>
                    </div>
                );
            });
            return (
                <div key={data.id} className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <div className="course_card_info">
                        <p>
                            <h3 className="title">
                                {data.title}
                            </h3>
                            <div class="topic_more">
                                {data.topic}
                            </div>
                            <h4>Whats Included</h4>
                            <ul class="you_will_get ">
                                {
                                    displayWhatincludes
                                }
                            </ul>
                            <Link className="btn course_card_info_Link"  to={`/Enquire/${data.id}`} >Enquire</Link >
                        </p>
                    </div>
                </div>
            );
        });
    }
}

export default CourseList;
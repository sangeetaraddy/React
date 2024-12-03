import React, { useEffect, useState } from "react";
import './EnquireForm.css';
import { useParams ,useNavigate} from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {addEnquire} from "../State/enquiriesSlice";
import { getCourseDetails } from "../State/courseSlice";


const EnquireForm = (props) => {
 
    const details = useSelector((state)=>state.course.details);
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    // let [details, setDetails] = useState({});
    const [state, setState] = useState({
        name: "",
        contact: "",
        email: "",
        course: "",
        country: "India",
        state: ""
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
        dispatch(addEnquire(state));
        setState({
            name: "",
            contact: "",
            email: "",
            course: "",
            country: "India",
            state: ""
        })
        alert("Equire details submitted");
    };
    const handleInputChange = (event) => {
        //event.preventDefault();
        const { name, value } = event.target;
        setState((prevProps) => ({
            ...prevProps,
            [name]: value
        }));

    };
    useEffect(() => {
        dispatch(getCourseDetails(id));
        setState({
            name:details.title
        })
    }, [dispatch,id])

    return (

        <div style={{ paddingTop: '78px' }}>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <h4 className="text-banner-title">
                        {details.title}
                    </h4>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-7 col-xs-12">
                            <h4 className="text-banner-subtitle">
                                Enter your details to enquire about this course</h4>
                            <div className="row">
                                <div className="col-md-6 col-xs-12">
                                    <div className="form-group">
                                        <label>Name <sub className="text-danger text-md-start">*</sub> </label>
                                        <input
                                            className="form-control form-control-md rounded-3"
                                            type="text"
                                            name="name"
                                            value={state.name}
                                            onChange={handleInputChange} />
                                        <small></small>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-12">
                                    <div className="form-group">
                                        <label>Contact No. <sub className="text-danger text-md-start">*</sub></label>
                                        <input
                                            type="text"
                                            name="contact"
                                            value={state.contact}
                                            onChange={handleInputChange}
                                            className="form-control form-control-md rounded-3" />
                                        <small></small>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Email address <sub className="text-danger text-md-start">*</sub></label>
                                <input
                                    type="text"
                                    name="email"
                                    value={state.email}
                                    onChange={handleInputChange}
                                    className="form-control form-control-md rounded-3" />
                                <small></small>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-xs-12">
                                    <div className="form-group">
                                        <label>Country <sub className="text-danger text-md-start">*</sub></label>
                                        <select
                                            type="text"
                                            name="country"
                                            value={state.country}
                                            onChange={handleInputChange}
                                            className="form-control rounded-3" aria-label="Default select example">
                                            <option value="India">India</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="USA">USA</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <small></small>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-12">
                                    <div className="form-group">
                                        <label>State Name <sub className="text-danger text-md-start">*</sub></label>
                                        <input
                                            type="text"
                                            name="state"
                                            value={state.state}
                                            onChange={handleInputChange}
                                            className="form-control form-control-md rounded-3" />
                                        <small></small>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-10"></div>
                                <div className="col-md-2">
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 mb-4">
                            <div className="course-learn-list">
                                <div className="row ">
                                    <div className="col-md-6 col-xs-12">
                                        <h4>
                                            Selected Course
                                        </h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-xs-12">
                                        <h5> {details.title}</h5>
                                    </div>
                                    <div className="col-md-12 col-xs-12">
                                        {details.topic}
                                        <input
                                            type="hidden"
                                            name="course"
                                            value={state.course}
                                            onChange={handleInputChange}
                                            className="form-control form-control-md rounded-3" />

                                    </div>
                                    <div className="col-md-12 col-xs-12">
                                        Price :  {details.price}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default EnquireForm;
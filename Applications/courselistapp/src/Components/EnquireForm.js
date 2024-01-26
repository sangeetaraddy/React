import React, { Component } from "react";
import './EnquireForm.css';

const url = "http://localhost:6700/course";

class EnquireForm extends Component {
    constructor(props) {
        super(props);
        this.state = { details: '' }
    }
    componentDidMount() {
        let id = 1;
        fetch(`${url}/${id}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    details: data
                })
            })
    }

    render() {
        return (
            <div style={{ paddingTop: '78px' }}>
                <div className="container">
                    <h4 className="text-banner-title">
                    {this.state.details.title}
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
                                        <input id="billing-name" type="text" className="form-control form-control-md rounded-3" name="billing_name" />
                                        <small></small>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-12">
                                    <div className="form-group">
                                        <label>Contact No. <sub className="text-danger text-md-start">*</sub></label>
                                        <input id="billing-tel" type="text" className="form-control form-control-md rounded-3" name="billing_tel" />
                                        <small></small>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Email address <sub className="text-danger text-md-start">*</sub></label>
                                <input id="billing-email" type="email" className="form-control form-control-md rounded-3" name="billing_email" />
                                <small></small>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-xs-12">
                                    <div className="form-group">
                                        <label>Country <sub className="text-danger text-md-start">*</sub></label>
                                        <select id="country" name="billing_country" className="form-control rounded-3" aria-label="Default select example">
                                            <option value="India" defaultValue="">India</option>
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
                                        <input id="billing-state" type="text" className="form-control form-control-md rounded-3" name="billing_state" />
                                        <small></small>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-10"></div>
                                <div className="col-md-2">
                                    <button className="btn btn-success">Submit</button>
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
                                        <h5> {this.state.details.title}</h5>
                                    </div>
                                    <div className="col-md-12 col-xs-12">
                                    {this.state.details.topic}
                                    </div>
                                    <div className="col-md-12 col-xs-12">
                                        Price :  {this.state.details.price}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default EnquireForm;
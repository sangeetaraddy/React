import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import{getEnquiries} from "../State/enquiriesSlice";

const UserEnquiries = () => {
    const data = useSelector((state)=>state.enquiries.Enquiries)
    const dispatch = useDispatch();
    const tdList = data.map((i) => {
        return (
            <tr>
              
                <td>
                    {i.name}
                </td>
                <td>
                    {i.contact}
                </td>
                <td>
                    {i.email}
                </td>
                <td>
                    {i.course}
                </td>
            </tr>
        );
    });
    useEffect(() => {
        dispatch(getEnquiries());
    }, [dispatch])
    return (
        <div style={{ paddingTop: '78px' }}>
            <div className="container">
                <h4 className="text-banner-title">
                    Users Enquiries
                </h4>

                <div className="row">
                    <table className="table" style={{ backgroundColor: "white" }}>
                        <thead>
                            <tr>
                              
                                <th scope="col">User Name</th>
                                <th scope="col">Contact No.</th>
                                <th scope="col">Email Id</th>
                                <th scope="col">Course</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tdList}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UserEnquiries;
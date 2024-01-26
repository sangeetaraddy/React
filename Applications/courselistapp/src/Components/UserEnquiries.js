import React, { Component } from "react";

class UserEnquiries extends Component {
    render() {
        return (
            <div style={{ paddingTop: '78px' }}>
                <div className="container">
                    <h4 className="text-banner-title">
                      Users Enquiries
                    </h4>
                   
                    <div className="row">
                        <table className="table" style={{backgroundColor:"white"}}>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Contact No.</th>
                                    <th scope="col">Email Id</th>
                                    <th scope="col">Course</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Azure</td>

                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>Azure</td>

                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>Azure</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserEnquiries;
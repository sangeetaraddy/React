import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from 'react-redux'

const FoodDetails = ({ details }) => {
    // const url = "http://localhost:6700/foods";
    // const [details, setDetails] = useState({});
    // const params = useParams();
    // useEffect(() => {
    //     fetch(`${url}/${params.id}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             setDetails(data)
    //         })
    // }, []);

    return (
        <div>
            <div className="container-fluid" style={{ marginTop: "80px" }}>
                <div className='row'>
                    <div className='col-md-12 pt-4 pb-4'>
                        <h4> {details.title}</h4>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-6">
                        <img className="fdDetailsImg" height="360" src={details.imgUrl} />
                    </div>
                    <div className="col-md-5">
                        <p>
                            {details.content}
                        </p>
                        <h5>
                            Ingredients
                        </h5>
                        <p>
                            {details.ingredients}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => (
{
    details: state.FoodDetails,
})
FoodDetails = connect(mapStateToProps, null)(FoodDetails)
export default FoodDetails;
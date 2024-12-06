import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect, useSelector } from 'react-redux'

const MovieDetails = ({ details }) => {
    const movieDetails = useSelector(state => state.data.movieDetails);

    return (
        <div>
            <div className="container-fluid" style={{ marginTop: "80px" }}>

                <div className='row'>
                    <div className="col-md-12">
                        <div class="row">
                            <div className="col-md-5">
                                <img height="400" src={movieDetails.moviePosterUrl} />
                            </div>
                            <div className="col-md-5">
                                <div class="row">
                                    <div className='col-md-6'>
                                        <h4> {movieDetails.movie_name}</h4>
                                    </div>
                                    <div className='col-md-6'>
                                        <p>Released On: {movieDetails.releaseDate}</p>
                                    </div>
                                </div>
                                <div className="row mt-4 pt-4">
                                    <div className="col-md-12">
                                        {movieDetails.duration}
                                    </div>
                                </div>
                                <div className="row mt-4 pt-4">
                                    <div className="col-md-12">
                                        {Array.from(Array(movieDetails.rank), (e, i) => {
                                            return <span class="fa fa-star checked"></span>
                                        })}

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MovieDetails;
import React from "react";
import { useSelector } from "react-redux";
import styles from "../HomePage/RecommendedMovies.css";
import Card from "../Card";


export const LastestMovies = () => {
    const movies_data = useSelector(state => state.app.movies_data);

    const filteredRecommendedMovies = movies_data.filter(moive => (
        !moive.is_premier
    ))

    // console.log(filteredRecommendedMovies);

    return (
        <div >
            <div style={{
                display: "flex",
                justifyContent: "center",
                padding: "6px"
            }}>
                <h3>LastestMovies</h3>
            </div>

            <div className="row">
                {
                    filteredRecommendedMovies?.map(movie => (
                        <div className="col-md-3">
                               <Card {...movie} key={movie.id} movie={movie} />
                         </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LastestMovies
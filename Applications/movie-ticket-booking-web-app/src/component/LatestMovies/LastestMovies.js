import React from "react";
import { useSelector } from "react-redux";
import styles from "../HomePage/RecommendedMovies.css";


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
                padding:"6px"
            }}>
                <h3>LastestMovies</h3>
            </div>

            <div className={styles.parent__text}>
            </div>
        </div>
    )
}

export default LastestMovies
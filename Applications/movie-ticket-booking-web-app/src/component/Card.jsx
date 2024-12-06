import React,{useEffect} from 'react';
import './Card.css'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getMovies } from '../Redux/data/actions';

const Card = ({ moviePosterUrl = "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MWsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00096384-yuwlfbxsjm-portrait.jpg"
    , movie_name = "Wonder Women"
    , movie_genre = [{
        "genre": "Action"
    },
    {
        "genre": "Adventure"
    },
    {
        "genre": "Fantasy"
    }], id }) => {

    let navigate = useNavigate();

    const dispatch = useDispatch();

    const handleChange = () => {
       dispatch(getMovies(id));
       navigate(`/movie/${id}`)
    }

    return (
        <div onClick={handleChange} className="card">
            <img src={moviePosterUrl} alt={movie_name} />
            <button type="button"  style={{ backgroundColor: "#ae4b8c", color: "#ffffff",borderRadius:0 }} className="btn btn-warning">Book</button>
            <div className="title">{movie_name}</div>
            <div className="genre">{movie_genre?.map((genre, index) => index === movie_genre.length - 1 ? genre : genre + "/")}</div>
        
        </div>
    )
}
export default Card

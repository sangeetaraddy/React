import React, { useEffect } from 'react';
import { AddCarousel } from '../component/HomePage/AddCarousel';
import { RecommendedMovies } from '../component/HomePage/RecommendedMovies';
import { useDispatch } from 'react-redux';
import { getLatestEvents, getLaughterEvents, getMovies, getOutdoorEvents, getPopularEvents } from '../Redux/app/actions';
import { getBookingDetails } from "../Redux/booking/action";
//Component


const Home =()=> {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovies());
        dispatch(getOutdoorEvents());
        dispatch(getLaughterEvents());
        dispatch(getPopularEvents());
        dispatch(getLatestEvents());
        dispatch(getBookingDetails());
    }, []);
   

        return (
            <div>
                <AddCarousel />
                <RecommendedMovies />
            </div>
        )

}
export default Home;
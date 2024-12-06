import React, { useState } from 'react';
import './Header.css'
import { Link } from "react-router-dom";
import logo from '../logo.png';


const Header = () => {
    const [query, setQuery] = React.useState("");
    return (
        <header>
            <div className="navbard">
                <div>
                    <img src={logo} alt="Logo" height="70" width="150" />
                </div>
                <div>
                    <div className="searchBar">
                        <input
                            type="text"
                            placeholder="Search for Movies, Events"
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="secondNav">
                <div className="link" >
                    Latest Movies
                </div>
                <div className="link" >

                    Upcoming Movies
                </div>
                <div className="link" >
                    Nearby Events
                </div>
            </div>
        </header>
    )
}

export default Header;
import React, { Component } from 'react';
import './../index.css';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <header className='header_courselist'>
                    <nav className="navbar navbar-fixed-top">
                        <div className="container">
                            <div className="nav-header-logoContainer" >
                                <div className='nav-header-logo'>Course List App</div>
                            </div>
                            <nav className="nav-header-navbar" >
                                <div className="nav-header-navLinks">
                                    <Link to="/Home">
                                        <div className="nav-header-navContent nav-header-main" >
                                            Home
                                        </div>
                                    </Link>
                                    <div className="nav-header-navContent nav-header-main" >
                                        My Courses
                                    </div>
                                    <div className="nav-header-navContent nav-header-main" >
                                        Training
                                    </div>
                                </div>
                            </nav>
                            <div className="nav-header-query">
                                <input placeholder="Search for Course,Category or keyword" className="nav-header-searchBar" />
                                <a className="nav-header-submit">
                                    <span className="fa fa-search course-sprite nav-header-iconSearch sprites-search" >
                                    </span>
                                </a>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header;
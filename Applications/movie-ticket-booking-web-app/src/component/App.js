import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Routing from './Routing';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (

            <div>
                <Header />
                <div className="container-fluid">
                    <Routing />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;
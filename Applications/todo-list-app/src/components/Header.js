import React, { Component } from "react";
import './Header.css';

class Header extends Component {
    render() {
        const myStyle={
            header:{
                background:'teal'
            },
            logo:{
                color:'white',
                textAlign:'center',
                fontSize:30
            }
        }
        return (
            <div>
                <header style={myStyle.header}>
                    <nav className="navbar navbar-expand-sm">
                        <div className="container-fluid">
                            <h1 style={myStyle.logo}>Todo List Application</h1>
                        </div>
                    </nav>
                </header>
            </div>

        )
    }
}
export default Header;
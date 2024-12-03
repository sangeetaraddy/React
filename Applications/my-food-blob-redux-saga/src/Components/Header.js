import React from "react";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top customNav" >
                <div className="container-fluid" >
                    <h5 className="navbar-brand custLogo" >Sangeeta's Kitchen</h5>
                    <div className="col-3">Recipes</div>
                    <div className="col-3">About</div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
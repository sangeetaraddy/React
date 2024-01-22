import React from "react";
import { Link } from "react-router-dom";
const Posts = () => {
    return (
        <div className="panel panel-warning">
            <div className="panel-heading">Panel Posts Header</div>
            <div className="panel-body">
                <div className="jumbotron">
                    <h2>JavaScript</h2>
                    <Link className="btn btn-info" to="/post/javascript">Detsils</Link>

                    <h2>NodeJS</h2>
                    <Link className="btn btn-info" to="/post/nodejs">Detsils</Link>

                    <h2>Python</h2>
                    <Link className="btn btn-info" to="/post/python">Detsils</Link>

                </div>
            </div>
        </div>
    )
}
export default Posts;



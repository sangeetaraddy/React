import React from "react";
import { useParams } from 'react-router-dom';
const PostsDetails = (props) => {
    const { topic } = useParams();
    console.log(topic);
    return (
        <div className="panel panel-primary">
            <div className="panel-heading">Panel PostsDetails Header</div>
            <div className="panel-body">Panel PostsDetails content for <h2>{topic}</h2></div>
        </div>
    )
}
export default PostsDetails;



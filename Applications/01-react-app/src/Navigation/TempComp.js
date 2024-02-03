import { Route,BrowserRouter as Router,Routes,Link,useParams } from "react-router-dom";

const TempComp =()=>{
    const params =useParams();
    return(
        <div>
            <p>{params.val}</p>
        </div>
    )
}

export default TempComp;
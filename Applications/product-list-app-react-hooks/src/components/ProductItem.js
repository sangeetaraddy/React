import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { SearchKeyContext } from "../App";

const articleStyle = { //custom css styling
    width: '70%',
    margin: '10px auto',
    color: 'olive',
    border: '4px solid RebeccaPurple ',
    borderRadius: '5%'
}
const ProductItem = () => {
    const [article, setArticle] = useState([]);
    const url = "http://localhost:8500/products";
    const searchKey=useContext(SearchKeyContext);
   
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setArticle(res.data);
                if(searchKey!='')
                {
                    let resList=article.filter(x=>x.name.toLowerCase().includes(searchKey.toLowerCase()));
                    setArticle(resList);
                }
               
                console.log("res", res.data);
            });
        }, [url,searchKey])

    return (
        article ?
            article.map((item) => {// map() calls this code iteratively for every record in "article" array
                return (
                    <article key={item.id} >
                        <div className="card" style={{ marginBottom: "20px" }}>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card-body">
                                        <img src={item.img} className="card-img-top" alt="..." />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card-body">
                                        <h5 className="card-title">$ {item.price}</h5>
                                        <p className="card-text">type: {item.type}</p>
                                        <button style={{ backgroundColor: "#386bc0", width: "100%" }}
                                            className="btn btn-primary btn-sm" type="button">
                                            Details</button>
                                        <button style={{ borderColor: "#386bc0", color: "#386bc0", width: "100%" }}
                                            className="btn btn-sm mt-2"
                                            type="button">
                                            Add to wishlist
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                )
            })
            :
            null
    )
}

export default ProductItem;
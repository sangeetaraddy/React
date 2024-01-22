import React from "react";
import './Products.css';

const ProductsList = (prodlist) => {

    const renderList = ({ prodlist }) => {
        if (prodlist) {
            return prodlist.map((data) => {
                return (
                    <div key={data.id} className='card col-md-3'>
                        <div className="row">
                            <div className="card-img">
                                <img className="card-img-top" src={data.img} alt={data.name} />
                            </div>
                            <hr />
                            <span className="topTemp">{data.name}</span>
                        </div>
                        <div className="card-body">
                            <span className="max">Rs. {data.price}</span>
                            <h4 className="card-title">{data.type}</h4>
                            <div className="card-text">
                                <p className="day">Rs. {data.price}</p>
                            </div>
                        </div>
                    </div>
                );
            });
        }
    };
    return (
        <div className="container">
            <div className="row">
                {renderList(prodlist)}
            </div>
        </div>
    )
}
export default ProductsList;

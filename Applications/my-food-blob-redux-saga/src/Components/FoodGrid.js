import './../App.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'
import { getFoodById } from '../actions';

let FoodGrid = ({foods},{tempValue}) => {

  if (foods) {
    return foods.map((data) => {
      return (
        <div className="col-md-3 pt-4" >
          <div className='rowbrg'>
            <Link to={`/FoodDetails/${data.id}`} >
              <img className='custimg' height="260" src={data.imgUrl} alt={data.title} />
            </Link>
            <div className='foodTitle'>
              {data.title}

            </div>
            <div className='foodTitle'>
              <Link to={`/FoodDetails/${data.id}`} >
                <button type="button" onClick={()=>getFoodById(data.id)} style={{ backgroundColor: "#f67753", color: "#ffffff" }} className="btn btn-warning">Details</button>
              </Link>
            </div>
          </div>

        </div>
      )
    });
  }
}
const mapStateToProps = (state) => (
  {
    foods: state.foods,
   
  })
FoodGrid = connect(mapStateToProps, null)(FoodGrid)
export default FoodGrid;
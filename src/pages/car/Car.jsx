import React from 'react';
import { Link } from 'react-router-dom';
import CarList from '../../components/carList/CarList';
import AddIcon from '@mui/icons-material/Add';

import "./car.css";

const Car = () => {
  return (
    <div className='car'>
      <div className="info">
        <div className="count">
          <p>5</p>
          <p>Cars</p>
        </div>
        <Link to="/car/addCars" style={{textDecoration: 'none'}}>
          <div className="addCar">
            <AddIcon style={{fontSize: "26px"}}/>
            <p>Add Car</p>
          </div>
        </Link>
        <Link to="/car/addTypes" style={{textDecoration: 'none'}}>
          <div className="addType">
            <AddIcon style={{fontSize: "26px"}}/>
            <p>Add Type</p>
          </div>
        </Link>
      </div>
      <div className="infoList">
        <div className="carList">
					<CarList />
        </div>
      </div>  
    </div>
  )
}

export default Car

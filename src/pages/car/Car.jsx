import React from 'react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import CarList from '../../components/carList/CarList';
import AddIcon from '@mui/icons-material/Add';

import "./car.css";

const Car = () => {
  const data = [
    { name: 'Mangar', value: 500 },
    { name: 'Electrical Car', value: 400 },
    { name: 'Hybird Car', value: 300 },
  ];
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
        <div className="chartReservation">
          <div className="title">
            <p>free cars</p>
          </div>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="value"
                  isAnimationActive={true}
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#6b00c6"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Car

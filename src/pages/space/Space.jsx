import React from 'react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import SpaceList from '../../components/spaceList/SpaceList';
import AddIcon from '@mui/icons-material/Add';

import "./space.css";

const Space = () => {
  const data = [
    { name: 'Mangar', value: 500 },
    { name: 'emp with camp Car', value: 400 },
    { name: 'emp with priv Car', value: 300 },
  ];
  return (
    <div className='space'>
      <div className="info">
        <div className="count">
          <p>3</p>
          <p>Spaces</p>
        </div>
        <Link to="/space/addSpaces" style={{textDecoration: 'none'}}>
          <div className="addSpace">
            <AddIcon style={{fontSize: "26px"}}/>
            <p>Add Space</p>
          </div>
        </Link>
      </div>
      <div className="infoList">
        <div className="spaceList">
					<SpaceList />
        </div>
        <div className="chartReservation">
          <div className="title">
            <p>free Spaces</p>
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

export default Space

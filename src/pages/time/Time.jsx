import React from 'react';
import { Link } from 'react-router-dom';
import TimeList from '../../components/timeList/TimeList';
import AddIcon from '@mui/icons-material/Add';

import "./time.css";

const Time = () => {
  return (
    <div className='time'>
      <div className="info">
        <div className="count">
          <p>3</p>
          <p>Groups</p>
        </div>
        <Link to="/time/addTimes" style={{textDecoration: 'none'}}>
          <div className="addTimes">
            <AddIcon style={{fontSize: "26px"}}/>
            <p>Add safe time</p>
          </div>
        </Link>
      </div>
      <div className="infoList">
        <div className="timeList">
					<TimeList />
        </div>
      </div>  
    </div>
  )
}

export default Time

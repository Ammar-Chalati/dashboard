import React from 'react';
import { Link } from 'react-router-dom';
import SpaceList from '../../components/spaceList/SpaceList';
import AddIcon from '@mui/icons-material/Add';

import "./space.css";

const Space = () => {
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
      </div>  
    </div>
  )
}

export default Space

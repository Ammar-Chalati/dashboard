import React from 'react'
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import VisitorList from "../../components/visitorList/VisitorList"

import './visitor.css'

const Visitor = () => {
  return (
    <div className='visitor'>
      <div className="info">
        <div className="count">
          <p>55</p>
          <p>Visitor</p>
        </div>
        <Link to='/visitor/addVisitor' style={{textDecoration: 'none'}}>
          <div className="addVisitor">
            <AddIcon style={{fontSize: "26px"}}/>
            <p>Add Visitor</p>
          </div>
        </Link>
      </div>
      <VisitorList />
    </div>
  )
}

export default Visitor

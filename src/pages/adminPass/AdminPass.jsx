import React from 'react';
import { Link } from 'react-router-dom'; 
import image from './Safe-bro.png';

import './adminPass.css'

const AdminPass = () => {
  return (
    <div className='adminPass'>
      <p>Enter the password for admin management</p>
			<div className="form">
				<img src={image} alt="password" />
        <div>
          <h2>Password</h2>
          <Link>
            <p>forgot password?</p>
          </Link>
        </div>
        <input type="password" placeholder='Password'/>
        <Link to='/adminPass/admin' style={{width: "40%", textDecoration:"none"}}>
          <div className='button'>login to admin management</div>
        </Link>
			</div>
    </div>
  )
}

export default AdminPass

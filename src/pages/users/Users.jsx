import React from 'react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import Userlist from '../../components/userlist/Userlist';
import AddIcon from '@mui/icons-material/Add';

import "./users.css";

const Users = () => {
  const data = [
    { name: 'Mangar', value: 500 },
    { name: 'emp with camp car', value: 400 },
    { name: 'emp with priv car', value: 300 },
  ];
  return (
    <div className='users'>
      <div className="info">
        <div className="count">
          <p>55</p>
          <p>Users</p>
        </div>
        <Link to='/users/addUsers' style={{textDecoration: 'none'}}>
          <div className="addUser">
            <AddIcon style={{fontSize: "26px"}}/>
            <p>Add User</p>
          </div>
        </Link>
      </div>
      <div className="infoList">
        <div className="userList">
        <Userlist />
        </div>
        <div className="chartReservation">
          <div className="title">
            <p>Reservation type</p>
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

export default Users

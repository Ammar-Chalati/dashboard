import React from 'react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import AdminList from '../../components/adminList/AdminList';
import AddIcon from '@mui/icons-material/Add';

import "./admin.css";

const Admin = () => {
  const data = [
    { name: 'full control', value: 500 },
    { name: 'Read', value: 400 },
    { name: 'Write', value: 300 },
  ];
  return (
    <div className='admin'>
      <div className="info">
        <div className="count">
          <p>5</p>
          <p>Admins</p>
        </div>
        <Link to='/adminPass/admin/addAdmins' style={{textDecoration: 'none'}}>
          <div className="addAdmin">
            <AddIcon style={{fontSize: "26px"}}/>
            <p>Add Admin</p>
          </div>
        </Link>
      </div>
      <div className="infoList">
        <div className="adminList">
          <AdminList />
        </div>
        <div className="chartReservation">
          <div className="title">
            <p>Admins</p>
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

export default Admin

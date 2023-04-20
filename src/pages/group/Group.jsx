import React from 'react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import GroupList from '../../components/groupList/GroupList';
import AddIcon from '@mui/icons-material/Add';

import "./group.css";

const Group = () => {
  const data = [
    { name: 'Mangar', value: 500 },
    { name: 'emp with camp car', value: 400 },
    { name: 'emp with priv car', value: 300 },
  ];
  return (
    <div className='group'>
      <div className="info">
        <div className="count">
          <p>3</p>
          <p>Groups</p>
        </div>
        <Link to='/group/addGroups' style={{textDecoration: 'none'}}>
          <div className="addUser">
            <AddIcon style={{fontSize: "26px"}}/>
            <p>Add Group</p>
          </div>
        </Link>
      </div>
      <div className="infoList">
        <div className="groupList">
        <GroupList />
        </div>
        <div className="chartReservation">
          <div className="title">
            <p>Group_id</p>
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

export default Group

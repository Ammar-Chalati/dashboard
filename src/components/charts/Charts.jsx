import React from 'react';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import './charts.css';


const data = [
  {
    name: 'Mon',
    uv: 1,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Tue',
    uv: 2,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Wed',
    uv: 0.5,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Thu',
    uv: 1.5,
    pv: 3908,
    amt: 2000,
  },
];

const Charts = () => {
  return (
    <div className='charts'>
      <div className='featureditem'>
        <div className="top">
          <h1 className="title">Free spaces</h1>
          <MoreVertIcon fontSize='small'/>
        </div>
        <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar value={55} text={'160.04'} strokeWidth={10} />
          </div>
          <div className="colors">
            <p className='firstcolor'>legend</p>
            <p className='secondcolor'>legend</p>
          </div>
        </div>
      </div>
      <div className='featureditem'>
        <div className="top">
          <h1 className="title">Free e cars</h1>
          <MoreVertIcon fontSize='small'/>
        </div>
        <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar value={55} text={'160.04'} strokeWidth={10} />
          </div>
          <div className="colors">
            <p className='firstcolor'>legend</p>
            <p className='secondcolor'>legend</p>
          </div>
        </div>
      </div>
      <div className='featureditem'>
        <div className="top">
          <h1 className="title">Reservarion type</h1>
          <MoreVertIcon fontSize='small'/>
        </div>
        <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar value={55} text={'160.04'} strokeWidth={10} />
          </div>
          <div className="colors">
            <p className='firstcolor'>legend</p>
            <p className='secondcolor'>legend</p>
          </div>
        </div>
      </div>
      <div className='featureditem'>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Charts

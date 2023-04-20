import React from 'react';

import Charts from '../../components/charts/Charts';
import Calendar from '../../components/calendar/Calendar';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="chart">
        <Charts />
      </div>
      <div className="calendarItem">
        <Calendar />
      </div>
    </div>
  )
}

export default Dashboard

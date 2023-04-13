import React from 'react';

import Navbar from "../../components/navbar/Navbar";
import Charts from '../../components/charts/Charts';
import Search from '../../components/search/Search';
import Calendar from '../../components/calendar/Calendar';
import './reservation.css';

const Reservation = () => {
  return (
    <div className="Reservation">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <div className="searchInput">
          <Search />
        </div>
        <div className="mainContent">
          <div className="chart">
            <Charts />
          </div>
          <div className="calendarItem">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reservation

import React from 'react';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';

import './navbar.css';
const menu = document.querySelectorAll(".navbar a .menuItem ");

menu.forEach(function (ele) {
  ele.onclick = function() {
    menu.forEach(function (ele) {
      ele.classList.remove("active");
    })
    this.classList.add("active");
  };
})

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <h1>logo</h1>
      </div>
      <Link to='/' >
        <div className='menuItem active'>
          <HomeIcon />
          <p>
            Dashboard
          </p>
        </div>
      </Link>
      <Link to='/reservation'>
      <div clas className='menuItem'>
          <CalendarTodayIcon />
          <p>
            Reservation Managment
          </p>
        </div>
      </Link>
      <Link to='/users'>
        <div className='menuItem'>
          <PersonIcon />
          <p>
            Users Managment
          </p>
        </div>
      </Link>
      <Link to='/group'>
        <div className='menuItem'>
          <GroupsIcon />
          <p>
            Group Managment
          </p>
        </div>
      </Link>
      <Link to='/space'>
        <div className='menuItem'>
          <LocationOnIcon />
          <p>
            Spaces Managment
          </p>
        </div>
      </Link>
      <Link to='/car'>
        <div className='menuItem'>
          <DirectionsCarIcon />
          <p>
            Cars Managment
          </p>
        </div>
      </Link>
      <Link to='/time'>
        <div className='menuItem'>
          <AccessTimeIcon />
          <p>
            Time Managment
          </p>
        </div>
      </Link>
      <Link to='/visitor'>
        <div className='menuItem'>
          <AccountBoxIcon />
          <p>
            Visitor Managment
          </p>
        </div>
      </Link>
      <Link to='/statistical'>
        <div className='menuItem'>
          <EqualizerIcon />
          <p>
            Statistical Managment
          </p>
        </div>
      </Link>
      <Link to='/adminPass'>
        <div className='menuItem'>
          <ManageAccountsIcon />
          <p>
            Admin Managment
          </p>
        </div>
      </Link>
      <hr />
      <Link to='/'>
        <div className='menuItem'>
          <AccountCircleIcon />
          <p>
            Profile
          </p>
        </div>
      </Link>
      <Link to='/'>
        <div className='menuItem'>
          <NotificationsIcon />
          <p>
            Notification
          </p>
        </div>
      </Link>
      <Link to='/'>
        <div className='menuItem'>
          <SettingsIcon />
          <p>
            Setting
          </p>
        </div>
      </Link>
      <Link to='/'>
        <div className='menuItem'>
          <HelpIcon />
          <p>
            Faq
          </p>
        </div>
      </Link>
      <Link to='/'>
        <div className='menuItem'>
          <LogoutIcon />
          <p>
            Logout
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Navbar

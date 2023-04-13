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

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <h1>logo</h1>
      </div>
      <div>
        <HomeIcon />
        <Link to='/'>Dashboard</Link>
      </div>
      <div>
        <CalendarTodayIcon />
        <Link to='/'>Reservation Managment</Link>
      </div>
      <div>
        <PersonIcon />
        <Link to='/'>Users Managment</Link>
      </div>
      <div>
        <GroupsIcon />
        <Link to='/'>Group Managment</Link>
      </div>
      <div>
        <LocationOnIcon />
        <Link to='/'>Spaces Managment</Link>
      </div>
      <div>
        <DirectionsCarIcon />
        <Link to='/'>Cars Managment</Link>
      </div>
      <div>
        <AccessTimeIcon />
        <Link to='/'>Time Managment</Link>
      </div>
      <div>
        <AccountBoxIcon />
        <Link to='/'>Visitor Managment</Link>
      </div>
      <div>
        <EqualizerIcon />
        <Link to='/'>Statistical Managment</Link>
      </div>
      <div>
        <ManageAccountsIcon />
        <Link to='/'>Admin Managment</Link>
      </div>
      <hr />
      <div>
        <AccountCircleIcon />
        <Link to='/'>Profile</Link>
      </div>
      <div>
        <NotificationsIcon />
        <Link to='/'>Notification</Link>
      </div>
      <div>
        <SettingsIcon />
        <Link to='/'>Setting</Link>
      </div>
      <div>
        <HelpIcon />
        <Link to='/'>Faq</Link>
      </div>
      <div>
        <LogoutIcon />
        <Link to='/'>Logout</Link>
      </div>
    </div>
  )
}

export default Navbar

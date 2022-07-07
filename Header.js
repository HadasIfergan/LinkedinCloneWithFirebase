import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import Home from '@material-ui/icons/Home';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import BusinessCenter from '@material-ui/icons/BusinessCenter';
import Chat from '@material-ui/icons/Chat';
import Notifications from '@material-ui/icons/Notifications';

function Header() {
  return (
    <div className="header">
     

      <div className="header__left">
        <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />

        <div className="header__search">
          < SearchIcon />
          <input type="text"/>
           
        </div>

      </div>

      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs"/>
        <HeaderOption Icon={Chat} title="Messaging"/>
        <HeaderOption Icon={Notifications} title="Notifications"/>
        <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C5603AQHktl7u0Tp8OQ/profile-displayphoto-shrink_200_200/0/1621452596423?e=1627516800&v=beta&t=zTpFd-NEgCCvDqrNIA84zbQkT273toHu6bn9_S1sm1E" title="me"/>
      </div>
      
    </div>
  )
}

export default Header;
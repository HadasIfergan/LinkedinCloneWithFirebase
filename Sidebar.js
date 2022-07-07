import { Avatar } from '@material-ui/core';
import React from 'react'
import './Sidebar.css';


function Sidebar() {

const recentItem = (topic) => (
  <div className="sidebar__recentItem">
    <span className="sidebar__hash">#</span>
    <p>{ topic}</p>
  </div>
);



  return (
<div className="sidebar">
  <div className="sidebar__top">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUyVocfqOB1AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt=""/>
        <Avatar className="sidebar__avatar"/>
        <h2>Hadas Ifergan</h2>
        <h4>hadas705@gmail.com</h4>
  </div>

       {/*states aka statistics*/}
  <div className="sidebar__stats">
       {/*states are the who viewed your profile  and views of your profile*/}
     <div className="sidebar__stat">
          <p>who viewed your profile</p>
          <p className="sidebar__statNumber">2,543</p>
     </div>

      <div className="sidebar__stat">
        <p>views on post</p>
        <p className="sidebar__statNumber">2,448</p>
   </div>

 </div>

    <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
</div>
  );
}

export default Sidebar;

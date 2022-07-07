import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@material-ui/core';


{/* {I re-destruct the object inside ,instead of props - Icon, title} */}
{/* {I pass the icon as a comp , it will be a material ui icon} */}
function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {/* {props.title - the regular way to write it instead of re-destruct the object} */}
      {/* {instead of render a random title,so I say - if I pass an icon only then I render the icon itself as a comp with a classname of headerOption__icon} */}
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
        

      {/*we use h3 as jsx and {} is a javascript */}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;

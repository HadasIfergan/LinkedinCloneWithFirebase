import { Avatar } from "@material-ui/core";
import React from 'react';
import './Post.css';
import InputOption from './InputOption';

import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";

import Chat from '@material-ui/icons/Chat';

import Share from '@material-ui/icons/Share';

import Send from '@material-ui/icons/Send';

function Post({ name, description, message, photoUrl }) {
  return (
  <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
    </div>

    <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray"/>

        <InputOption Icon={Chat} title="Comment" color="gray"/>

        <InputOption Icon={Share} title="Share" color="gray"/>

        <InputOption Icon={Send} title="Send" color="gray"/>
    </div>
  </div>
  );
}

export default Post;

import React from "react";
import "./PostCard.scss";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const PostCard = (props) => {
  return (
    <div className="postcard">
      <div className="postcard__contents">
        <div className="postcard__contents__current">
          <i className={props.current}></i>
          <p>{props.current_title}</p>
        </div>

        <div className="postcard__contents__mainContent">
          <div className="postcard__contents__mainContent__avatar_content_name">
            <div className="frame_img">
              <img src={props.avatar} />
            </div>
            <div className="content_name">
              <div className="UserName_time">
                <p className="nam_user">{props.name_user}</p>
                <p className="subname_user">{props.subname_user}</p>
              </div>

              <div className="current_status">
                <p>{props.content}</p>
              </div>
            </div>
          </div>

          <div className="frame_more">
            <buton className="buttons">
              <i class="bx bx-dots-horizontal-rounded"></i>
            </buton>
          </div>
        </div>

        <div className="img_upload">
          <img src={props.image} />
        </div>
        <div className="Card_icon">
        

          <div className="num_icon">
              <div className="hover_i">
            <Tooltip title={props.title} className='tooltip'>
              <IconButton>
                <i className={props.icon}></i>
              </IconButton>
            </Tooltip>
            <p>{props.likes}</p>
            </div>
          </div>

          <div  className="num_icon__more ">
          <div className="hover_ii">
            <Tooltip title={props.title1} className='tooltips' >
              <IconButton>
                <i className={props.icon1}></i>
              </IconButton>
            </Tooltip>
            <p>{props.likes1}</p>
            </div>
          </div>

          <div  className="num_icon__more">
          <div className="hover_iii">
            <Tooltip title={props.title2} className='tooltipss'>
              <IconButton>
                <i className={props.icon2}></i>
              </IconButton>
            </Tooltip>
            <p>{props.likes2}</p>
            </div>
          </div>

          <div  className="num_icon__more">
          <div className="hover_iiii">
            <Tooltip title={props.title3} className='tooltipsss' >
              <IconButton>
                <i className={props.icon3}></i>
              </IconButton>
            </Tooltip>
            </div>
           
          </div>

        </div>
      </div>
    </div>
  );
};

export default PostCard;

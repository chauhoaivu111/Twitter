import React from "react";
import "./FirstNav.scss";

const FisrtNav = (props) => {
  return (
    <div className="first_nav">
      <div className="first_nav__contents">
        <div className="frame_nav_content">
          <p className="title">{props.title}</p>
          <p className="name">{props.name}</p>
          <p className="number_tweet">{props.number_tweet}</p>
        </div>

        <div className="frame_icon_appbarright">
          <button>
          <i class="bx bx-dots-horizontal-rounded"></i>
          </button>
          
        </div>
      </div>
    </div>
  );
};


export const Second_Nav = props => {
  
  return(
    <div className="second_Nav">
      <div className="frame_style_content_secon_nav">
        <p>{props.Title}</p>
        <h4>{props.Topic}</h4>
      </div>
      <div className="topic_img">
        <img src={props.image} alt =''/>
      </div>

    </div>
  )
}

export default FisrtNav;

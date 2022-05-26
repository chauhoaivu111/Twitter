import React from "react";
import MenuMobile from "../menumobile/MenuMoile";

import './BottomAppBar.scss'

const BottomAppBar = (props) => {
  return (
    <div className="sub_content">
      <div className="sub_content__left">
        <div className="sub_content__left__avatar">
          <img src={props.img} alt="" />
        </div>
        <div className="sub_content__left__contents">
          <p className="title">{props.name}</p>
          <p className="subname">{props.subname}</p>
        </div>
      </div>

      <div className="sub_content__right">
          <button>Follow</button>
         
      </div>

      <MenuMobile/>
    </div>
  );
};

export default BottomAppBar;

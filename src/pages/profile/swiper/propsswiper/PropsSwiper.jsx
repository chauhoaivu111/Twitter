import React from "react";
import "./PropsSwiper.scss";

const PropsSwiper = (props) => {
  return (
    <div className="main_props_swiper">
      <div className="main_props_swiper__one">
        <div className="left_element">
          <div className="one_left">
            <div className="contents">{props.content_1}</div>
            <div className="icons">
              {" "}
              <i className={props.icon}></i>
            </div>
          </div>
        </div>

        <div className="right_element">
          <div className="one_right">
            <i className={props.icons}></i>
          </div>
        </div>
      </div>
      <div className="main_props_swiper__two">
        <div className="left_element">
          <div className="one_left">
            <div className="contents">{props.content_2}</div>
            <div className="icons">
              {" "}
              <i className={props.icon}></i>
            </div>
          </div>
        </div>

        <div className="right_element">
          <div className="one_right">
            <i className={props.icons}></i>
          </div>
        </div>
      </div>
      <div className="main_props_swiper__three">
      <div className="left_element">
          <div className="one_left">
            <div className="contents">{props.content_3}</div>
            <div className="icons">
              {" "}
              <i className={props.icon}></i>
            </div>
          </div>
        </div>

        <div className="right_element">
          <div className="one_right">
            <i className={props.icons}></i>
          </div>
        </div>
      </div>
      <div className="main_props_swiper__four">
      <div className="left_element">
          <div className="one_left">
            <div className="contents">{props.content_4}</div>
            <div className="icons">
              {" "}
              <i className={props.icon}></i>
            </div>
          </div>
        </div>

        <div className="right_element">
          <div className="one_right">
            <i className={props.icons}></i>
          </div>
        </div>
      </div>
      <div className="main_props_swiper__five">
      <div className="left_element">
          <div className="one_left">
            <div className="contents">{props.content_5}</div>
            <div className="icons">
              {" "}
              <i className={props.icon}></i>
            </div>
          </div>
        </div>

        <div className="right_element">
          <div className="one_right">
            <i className={props.icons}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropsSwiper;

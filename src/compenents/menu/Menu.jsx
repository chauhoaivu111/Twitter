import React from "react";
import "./Menu.scss";

import logo from "../../assets/image/logo.png";
import menu_data from "../../assets/data/Menu_Routes";
import { Link } from "react-router-dom";

import "../../sass/index.scss";
import { getAvatarUrl } from "../../utils/avatarUrl";

const MenuItem = (props) => {
  const active = props.active ? "active " : "";

  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <badge className="frame_news">{props.bad}</badge>

        <span>{props.name}</span>
      </div>
    </div>
  );
};

const Menu = (props) => {
  const activeItem = menu_data.findIndex(
    (item) => item.route === props.location.pathname
  );

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Link to="/">
          <button className="logohover">
            <img src={logo} alt="logo" />
          </button>
        </Link>
      </div>

      {menu_data.map((item, index) => (
        <Link to={item.route} key={index}>
          <MenuItem
            icon={index === activeItem ? item.icons : item.icon}
            name={item.display_name}
            bad={index === activeItem ? item.badge : ""}
            // if set active by item.route=== location
            active={index === activeItem}
          />
        </Link>
      ))}

      <div className="frame_Button">
        <button>
          Tweet
        </button>

        <div className="frame_fake_button">
          <div className="frame_fake_button_img">
            <img src={getAvatarUrl(0)} alt =''/>
            
          </div>
          <div className="frame_fake_button_title">
            <p className="NameUser">
              Hoài Vũ
            </p>
            <p className="NameUser_fake">
              @HoaiVu08052001
            </p>

          </div>
          <div className="frame_icon_dot">
          <i class='bx bx-dots-horizontal-rounded'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

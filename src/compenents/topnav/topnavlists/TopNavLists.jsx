
import React, { useRef } from "react";

import menu_mobile from "../../../assets/data/Menu_Routes_mobile.json";

import Menu, { Menu1, Menu2, Menu3 } from "../../menumobile/MenuMoile";

import { Link, useLocation } from "react-router-dom";

import HV from "../../../assets/image/HV.jpg";
import './TopNavLists.scss';

import {
  data_profile,
  data_menu1_mobile,
  data_menu2_mobile,
  data_menu3_mobile,
} from "../../../assets/data/Data_mobile_Menu";
const MenuItem = (props) => {
  const active = props.active ? "active " : "";

  return (
    <div className="sidebar__item__mobile">
      <div className={`sidebar__item-inner__mobile ${active}`}>
        <i className={props.icon}></i>
      </div>
    </div>
  );
};

const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener("mousedown", (e) => {
    // user click toggle
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle("active");
    } else {
      // user click outside toggle and content
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove("active");
      }
    }
  });
};

const TopNavLists = (props) => {
  const menu_ref = useRef(null);
  const menu_toggle_ref = useRef(null);

  clickOutsideRef(menu_ref, menu_toggle_ref);

  const setActiveMenu = () => menu_ref.current.classList.add("active");

  const closeMenu = () => menu_ref.current.classList.remove("active");

  const { pathname } = useLocation();

  const activeItem = menu_mobile.findIndex((item) => item.route === pathname);

  return (
    <div className="headerss">
      <div className="header__wrapss">
        <div className="user_headerss">
          {/* <img
            src={props.image}
            ref={menu_toggle_ref}
            onClick={() => setActiveMenu()}
          /> */}
          <Link to='/Messages'><i class='bx bx-left-arrow-alt iarrow' ></i></Link>
          <div className="sub_hea_bookmark">
          <h2>{props.Title}</h2>
          <p>{props.sub}</p>
          </div>
         
        </div>

        <div className="button_right_header">
        <i class='bx bx-news'></i>
        <i class='bx bx-dots-horizontal-rounded'></i>
        </div>
      </div>

      <ul className="menu_icon_moblie">
        {menu_mobile.map((item, index) => (
          <Link to={item.route} key={index}>
            <MenuItem
              icon={index === activeItem ? item.icons : item.icon}
              active={index === activeItem}
            />
          </Link>
        ))}
      </ul>

      <div ref={menu_ref} className="theme-menu">
        <div className="theme-menu__top_frame">
          <button
            ref={menu_ref}
            className="theme-menu__close"
            onClick={() => closeMenu()}
          >
            <i className="bx bx-x"></i>
          </button>
          <div className="theme-menu__titless">
            <h4>Account Info</h4>
          </div>
        </div>

        <div className="theme-menu__second_scroll">
          <div className="content_user">
            {data_profile.map((item, index) => (
              <div key={index}>
                <Menu
                  image={item.iamge}
                  BT={item.BT}
                  name_user={item.name_user}
                  sub_name={item.sub_name}
                  following={item.following}
                  follower={item.follower}
                />
              </div>
            ))}
          </div>
          <div className="main_frame_menu">
            {data_menu1_mobile.map((item, index) => (
              <div key={index}>
                <Menu1 icons={item.icons} titles={item.titles} />
              </div>
            ))}
          </div>
          <div className="second_frame_menu">
            {data_menu2_mobile.map((item, index) => (
              <div key={index}>
                <Menu2 icons={item.icons} titles={item.titles} />
              </div>
            ))}
          </div>
          <div className="third_frame_menu">
            {data_menu3_mobile.map((item, index) => (
              <div key={index}>
                <Menu3 icons={item.icons} titles={item.titles} />
              </div>
            ))}
          </div>
          <div className="four_frame_menu">
            <i class="bx bx-log-out"></i>
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavLists;

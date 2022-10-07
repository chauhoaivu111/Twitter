import React from "react";
import AppBarRight from "../../compenents/secondappbar/AppBarRight";

import TopNavHome from "../../compenents/topnav/topnavhome/TopNavHome";
import "./Notifications.scss";

import data_list from "../../assets/data/second_appbar.json";
import TopNavSearch from "../../compenents/topnav/topnavsearch/TopNavSearch";
import BottomAppBar from "../../compenents/bottomappbar/BottomAppBar";
import sub_list from "../../assets/data/Sub_appbar.json";
import HV from "../../assets/image/HV.jpg";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";

const Notifications = () => {
  const titles = {
    title: "Notifications",
    HV: HV,
  };

  const headerNav_notifi = [
    {
      display: "all",
      routes: "/Notifications",
    },
    {
      display: "Menstions",
      routes: "/Notifications/Menstitions",
    },
  ];

  const sub_nofitication = [
    {
      sub: "There was a login to your account @ HoaiVu08052001 from a new device on May 24 , 2022. Review it now .",
      icon: "bx bxl-twitter",
      route: "/Notifications",
      sub1: "There was a login to your account @ HoaiVu08052001 from a new device on May 22 , 2022. Review it now .",
      sub2: "There was a login to your account @ HoaiVu08052001 from a new device on May 20 , 2022. Review it now .",
      sub3: "There was a login to your account @ HoaiVu08052001 from a new device on May 18 , 2022. Review it now .",
      sub4: "There was a login to your account @ HoaiVu08052001 from a new device on May 17 , 2022. Review it now .",
      sub5: "There was a login to your account @ HoaiVu08052001 from a new device on May 14 , 2022. Review it now .",
      sub6: "There was a login to your account @ HoaiVu08052001 from a new device on May 12 , 2022. Review it now .",
      sub7: "There was a login to your account @ HoaiVu08052001 from a new device on May 9 , 2022. Review it now .",
      sub8: "There was a login to your account @ HoaiVu08052001 from a new device on May 8 , 2022. Review it now .",
      sub9: "There was a login to your account @ HoaiVu08052001 from a new device on May 4 , 2022. Review it now .",
      sub10:
        "There was a login to your account @ HoaiVu08052001 from a new device on May 1 , 2022. Review it now .",
    },

    {
      sub_secondsecond: "@PhungNhi08052002 reminded you in a comment.",
      icons: "bx bxl-twitter",
      route: "/Notifications/Menstitions",
      sub_secondsecond1: "@HoaiPhong08051978 reminded you in a comment.",
      sub_secondsecond2: "@Bao08052004 reminded you in a comment.",
      sub_secondsecond3: "@Phuc01012001 reminded you in a comment.",
      sub_secondsecond4: "@Nhat11112001 reminded you in a comment ",
    },
  ];

  const { pathname } = useLocation();
  const active = headerNav_notifi.findIndex((e) => e.routes === pathname);
  // const actives = headerNav_notifi.findIndex(e =>e.routes === pathname)
  const active_sub = sub_nofitication.findIndex((e) => e.route === pathname);

  return (
    <div className="main_homess">
      <TopNavHome Title={titles.title} image={titles.HV} />

      <div className="frame_statusss">
        <div className="main_of_second">
          <div className="frame_style_max_content">
            <div className="testnote">
              <p className="p_hinde">
                {" "}
                chổ này dùng để fake position bởi vì chưa tối ưu layout dùng cái
                này với color transparent sẽ fit được tôi sẽ update trong tương
                lai nếu như tìm được giải pháp mới
              </p>

              <ul className="main_of_second__nav">
                {headerNav_notifi.map((item, i) => (
                  <div className="divactive">
                    <div className="main_li">
                      <Link to={item.routes}>
                        <li
                          key={i}
                          className={` ${i === active ? "active" : ""}`}
                        >
                          {item.display}
                        </li>
                      </Link>
                    </div>
                  </div>
                ))}
              </ul>

              <div className="main_sub">
                {sub_nofitication.map((item, i) => (
                  <div className="divactive">
                    <div>
                      <div
                        key={i}
                        className={` sub ${
                          i === active_sub ? "active_sub" : ""
                        }`}
                      >
                        <div
                          className={` frame_sub ${
                            i === active_sub ? "active_sub" : ""
                          }`}
                        >
                          <div className="fit_flex">
                            <i
                              className={item.icon ? item.icon : item.icons}
                            ></i>
                            <p>{item.sub ? item.sub : item.sub_secondsecond}</p>
                          </div>
                        </div>
                        <div
                          className={` frame_sub ${
                            i === active_sub ? "active_sub" : ""
                          }`}
                        >
                          <div className="fit_flex">
                            <i
                              className={item.icon ? item.icon : item.icons}
                            ></i>
                            <p>
                              {item.sub1 ? item.sub1 : item.sub_secondsecond1}
                            </p>
                          </div>
                        </div>
                        <div
                          className={` frame_sub ${
                            i === active_sub ? "active_sub" : ""
                          }`}
                        >
                          <div className="fit_flex">
                            <i
                              className={item.icon ? item.icon : item.icons}
                            ></i>
                            <p>
                              {item.sub2 ? item.sub2 : item.sub_secondsecond2}
                            </p>
                          </div>
                        </div>
                        <div
                          className={` frame_sub ${
                            i === active_sub ? "active_sub" : ""
                          }`}
                        >
                          <div className="fit_flex">
                            <i
                              className={item.icon ? item.icon : item.icons}
                            ></i>
                            <p>
                              {item.sub3 ? item.sub3 : item.sub_secondsecond3}
                            </p>
                          </div>
                        </div>
                        <div
                          className={` frame_sub ${
                            i === active_sub ? "active_sub" : ""
                          }`}
                        >
                          <div className="fit_flex">
                            <i
                              className={item.icon ? item.icon : item.icons}
                            ></i>
                            <p>
                              {item.sub4 ? item.sub4 : item.sub_secondsecond4}
                            </p>
                          </div>
                        </div>
                        <div
                          className={` frame_sub ${
                            i === active_sub ? "active_sub" : ""
                          }`}
                        >
                          <div className="fit_flex">
                            <i className={item.icon}></i>
                            <p>{item.sub5}</p>
                          </div>
                        </div>
                        <div
                          className={` frame_sub ${
                            i === active_sub ? "active_sub" : ""
                          }`}
                        >
                          <div className="fit_flex">
                            <i className={item.icon}></i>
                            <p>{item.sub6}</p>
                          </div>
                        </div>
                        <div
                          className={` frame_sub ${
                            i === active_sub ? "active_sub" : ""
                          }`}
                        >
                          <div className="fit_flex">
                            <i className={item.icon}></i>
                            <p>{item.sub7}</p>
                          </div>
                        </div>
                        <div
                          className={` frame_sub ${
                            i === active_sub ? "active_sub" : ""
                          }`}
                        >
                          <div className="fit_flex">
                            <i className={item.icon}></i>
                            <p>{item.sub8}</p>
                          </div>
                        </div>
                        <div
                          className={` frame_sub ${
                            i === active_sub ? "active_sub" : ""
                          }`}
                        >
                          <div className="fit_flex">
                            <i className={item.icon}></i>
                            <p>{item.sub9}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="set_position_search">
          <TopNavSearch />
        </div>
      </div>

      <div className="frame_main_appbarRight">
        <div className="content">
          <h2>Trends for you</h2>

          {data_list.map((item, index) => (
            <div key={index}>
              <AppBarRight
                title={item.title}
                name={item.name}
                number_tweet={item.number_tweet}
              />
            </div>
          ))}
          <p className="see">Show more</p>
        </div>

        <div className="content ">
          <h2 className="sub_title ">Who to follow</h2>

          {sub_list.map((item, index) => (
            <div key={index}>
              <BottomAppBar
                img={item.img}
                name={item.name}
                subname={item.subname}
              />
            </div>
          ))}
          <p className="see">Show more</p>
        </div>

        <div className="frame_copyright">
          <div className="frame_copyright__one">
            <p>Term of Service</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
          <div className="frame_copyright__second">
            <p>Accessibility</p>
            <p>Ads info</p>
            <p>More...</p>
            <p>© 2022 Twitter, Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;

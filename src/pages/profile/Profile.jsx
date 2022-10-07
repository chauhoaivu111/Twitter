import React from "react";
import AppBarRight from "../../compenents/secondappbar/AppBarRight";

import "./Profile.scss";

import data_list from "../../assets/data/second_appbar.json";
import TopNavSearch from "../../compenents/topnav/topnavsearch/TopNavSearch";
import BottomAppBar from "../../compenents/bottomappbar/BottomAppBar";
import sub_list from "../../assets/data/Sub_appbar.json";
import HV from "../../assets/image/HV.jpg";
import BM from "../../assets/image/bookmark.jpg";
import TopNavProfile from "../../compenents/topnav/topnavprofile/TopNavProfile";
import { List_Second_nav } from "../../assets/data/Second_Nav_List";
import FisrtNav, {
  Second_Nav,
  Second_Nav_Lists,
} from "../../compenents/topnav/topnavexplore/firstnav/FisrtNav";
import Lists_data from "../../assets/data/Lists_data";
import CoverPhoto from "./coverphoto/CoverPhoto";
import Profile_data, { Sub_profile_data } from "../../assets/data/Profile_data";

import { Link, useLocation } from "react-router-dom";
import SubContent from "./sub_content/SubContent";
import Swiperss from "./swiper/Swiper";

const Profile = () => {
  const titles = {
    title: "Hoài Vũ",
    HV: HV,
    sub: "5 Tweets",
  };

  const head_nav_profile = [
    {
      topic: "Tweets",
      route: "/Profile",
    },
    {
      topic: "Tweets&Replies",
      route: "/Profile/Tweets&replies",
    },
    {
      topic: "Media",
      route: "/Profile/Media",
    },
    {
      topic: "Likes",
      route: "/Profile/Likes",
    },
  ];

  const { pathname } = useLocation();
  const active = head_nav_profile.findIndex((e) => e.route === pathname);
  const activess = Sub_profile_data.findIndex((e) => e.route === pathname);

  return (
    <div className="main_home">
      <TopNavProfile Title={titles.title} sub={titles.sub} image={titles.HV} />

      <div className="frame_bookmark">
        {Profile_data.map((item, index) => (
          <CoverPhoto
            key={index}
            backdrop={item.backdrop}
            avatar_profile={item.avatar_profile}
            Name={item.Name}
            Sub_name={item.Sub_name}
            icon={item.icon_join}
            joined_date={item.joined_date}
            following={item.following}
            follower={item.followers}
          />
        ))}

        <div className="main_head_nav_profile">
          {head_nav_profile.map((item, index) => (
            <div className="main_head_nav_profile__element">
              <Link to={item.route}>
                <p key={index}>{item.topic}</p>
                <li className={`${index === active ? "actives" : ""}`} />
              </Link>
            </div>
          ))}
        </div>

        <div className="frame_list">
          {Sub_profile_data.map((item, index) => (
            <div
              className={`divtest ${index === activess ? "active_next" : ""}`}
            >
              <div
                className={`fakeh2active ${
                  index === activess ? "active_next" : ""
                }`}
              >
                <div className="contents_nav">
                  <h2> Who to follow</h2>
                </div>

                {Sub_profile_data.map((item, index) => (
                  <div key={index}>
                    <SubContent
                      icon={item.icon}
                      user_follow={item.user_follow}
                      image={item.iamge}
                      Name={item.Name}
                      Sub_name={item.Sub_name}
                      content={item.content}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="div_showmoress">
            <p>Show more</p>
          </div>
        </div>

        <div className="nav_content">
         
        </div>
        <div className="your_list_more">
          <h2>Topics to follow</h2>
          <p>
          Tweets about the Topics you follow show up in your Home timeline
          </p>
          <Swiperss />
          <div className="showmoressss">
            <p>More topics</p>
          </div>
        </div>
      </div>

      <div>
        <div className="set_position_search">
          <TopNavSearch />
        </div>
      </div>

      <div className="frame_main_appbarRightsss">
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

export default Profile;

import React from "react";
import TopNavExplore from "../../compenents/topnav/topnavexplore/TopNavExplore";
import { getAvatarUrl, getPhotoUrl } from "../../utils/avatarUrl";
import BottomAppBar from "../../compenents/bottomappbar/BottomAppBar";
import sub_list from "../../assets/data/Sub_appbar.json";
import "./Explore.scss";

import FisrtNav, { Second_Nav } from "../../compenents/topnav/topnavexplore/firstnav/FisrtNav";
import data_explore_nav from "../../assets/data/content_explore.json";
import { List_Second_nav } from "../../assets/data/Second_Nav_List";
import PostCard from "../../compenents/postcard/PostCard";
import data_content from "../../assets/data/Data_content";

const Explore = () => {
  const titles = {
    title: "Explore",
    HV: getAvatarUrl(0),
  };

  return (
    <div className="main_explore">
      <TopNavExplore Title={titles.title} image={titles.HV} />

      <div className="main_explore__only_image">
        <img src={getPhotoUrl("explore", 600, 300)} alt="" />
      </div>

      <div className="nav_content">
        <div className="contents_nav">
          <h2> Trending for you</h2>
        </div>

        {data_explore_nav.map((item, index) => (
          <div key={index}>
            <FisrtNav
              title={item.title}
              name={item.name}
              number_tweet={item.number_tweet}
            />
          </div>
        ))}

        <div className="div_showmore">
          <p>Show more</p>
        </div>

      </div>

      <div className="nav_content">
        <div className="contents_nav">
          <h2> What's happening</h2>
        </div>

        {List_Second_nav.map((item, index) => (
          <div key={index}>
          <Second_Nav
          
          Title ={item.title}
          Topic={item.topic}
          image={item.image}
          
          />
          </div>
        ))}

        <div className="div_showmore">
          <p>Show more</p>
        </div>

      </div>

      <div className='style_fit'>
        
          {data_content.map((item, index) => (
            <div key={index}  className="frame_status__contents" >
              <PostCard
                avatar={item.avatar}
                current={item.current}
                current_title={item.current_title}
                name_user={item.name_user}
                subname_user={item.subname_user}
                content={item.content}
                image={item.image}
                icon={item.icon}
                title={item.title}
                likes={item.likes}
                icon1={item.icon1}
                title1={item.title1}
                likes1={item.likes1}
                icon2={item.icon2}
                title2={item.title2}
                likes2={item.likes2}
                icon3={item.icon3}
                title3={item.title3}
              />
            </div>
          ))}
        </div>

      <div className="frame_main_appbarRight_ex">
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
            {/* <p>Cookie Policy</p> */}
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

export default Explore;

import React from "react";
import AppBarRight from "../../compenents/secondappbar/AppBarRight";

import TopNavHome from "../../compenents/topnav/topnavhome/TopNavHome";
import "./Home.scss";

import data_list from "../../assets/data/second_appbar.json";
import TopNavSearch from "../../compenents/topnav/topnavsearch/TopNavSearch";
import BottomAppBar from "../../compenents/bottomappbar/BottomAppBar";
import sub_list from "../../assets/data/Sub_appbar.json";
import HV from "../../assets/image/HV.jpg";
import Status from "../../compenents/status/Status";
import PostCard from "../../compenents/postcard/PostCard";

import data_content from "../../assets/data/Data_content";

const Home = () => {
  const titles = {
    title: "Home",
    HV: HV,
  };

  return (
    <div className="main_home">
      <TopNavHome Title={titles.title} image={titles.HV} />

      <div className="frame_status">
        <Status />
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
          <p  className="see">Show more</p>
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

export default Home;

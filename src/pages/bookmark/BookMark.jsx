import React from "react";
import AppBarRight from "../../compenents/secondappbar/AppBarRight";

import "./BookMark.scss";

import data_list from "../../assets/data/second_appbar.json";
import TopNavSearch from "../../compenents/topnav/topnavsearch/TopNavSearch";
import BottomAppBar from "../../compenents/bottomappbar/BottomAppBar";
import sub_list from "../../assets/data/Sub_appbar.json";
import { getAvatarUrl, getPhotoUrl } from "../../utils/avatarUrl";
import TopNavBookMark from "../../compenents/topnav/topnavbookmark/TopNavBookMark";

const BookMark = () => {
  const titles = {
    title: "Bookmakrs",
    HV: getAvatarUrl(0),
    sub: "@HoaiVu08052001",
  };

  return (
    <div className="main_home">
      <TopNavBookMark Title={titles.title} sub={titles.sub} image={titles.HV} />

      <div className="frame_bookmark">
        <div className="frame_img">
          <img src={getPhotoUrl("bookmark", 600, 300)} alt="" />
        </div>

        <h1>Save Tweets for later</h1>
        <div className="frame_content_bookmark">
          <p>
            Don’t let the good ones fly away! Bookmark Tweets to easily find
            them again in the future.
          </p>
        </div>
      </div>

      <div>
        <div className="set_position_search">
          <TopNavSearch />
        </div>
      </div>

      <div className="frame_main_appbarRightss">
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

export default BookMark;

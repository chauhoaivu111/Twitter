import React from "react";
import AppBarRight from "../../compenents/secondappbar/AppBarRight";

import "./Lists.scss";

import data_list from "../../assets/data/second_appbar.json";
import TopNavSearch from "../../compenents/topnav/topnavsearch/TopNavSearch";
import BottomAppBar from "../../compenents/bottomappbar/BottomAppBar";
import sub_list from "../../assets/data/Sub_appbar.json";
import HV from "../../assets/image/HV.jpg";
import BM from "../../assets/image/bookmark.jpg";
import TopNavLists from "../../compenents/topnav/topnavlists/TopNavLists";
import { List_Second_nav } from "../../assets/data/Second_Nav_List";
import FisrtNav, {Second_Nav, Second_Nav_Lists} from "../../compenents/topnav/topnavexplore/firstnav/FisrtNav";
import Lists_data from '../../assets/data/Lists_data';
const Lists = () => {
  const titles = {
    title: "Lists",
    HV: HV,
    sub: "@HoaiVu08052001",
  };

  return (
    <div className="main_home">
      <TopNavLists Title={titles.title} sub={titles.sub} image={titles.HV} />

      <div className="frame_bookmark">
        <div className="frame_list">
          <h2>Pinned Lists</h2>
          <p>
            Nothing to see here yet — pin your favorite Lists to access them
            quickly.
          </p>
        </div>

        <div className="nav_content">
          <div className="contents_nav">
            <h2> Discover new Lists</h2>
          </div>

          {Lists_data.map((item, index) => (
            <div key={index}>
              <Second_Nav_Lists
              image={item.image}
              sub_image={item.sub_image}
              Name ={item.Name}
              sub_name ={item.sub_ame}
               
               
              />
            </div>
          ))}

          <div className="div_showmore">
            <p>Show more</p>
          </div>
        </div>
        <div className="your_list_more">
          <h2>Your List</h2>
          <p>You haven't created or followed any Lists. When you do, they'll show up here.</p>
        </div>
      </div>

      <div>
        <div className="set_position_search">
          <TopNavSearch />
        </div>
      </div>

      <div className="frame_main_appbarRightsss">
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

export default Lists;



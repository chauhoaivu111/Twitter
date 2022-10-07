import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import React from "react";
import "./Swiper.scss";
import List_choice_data from "../../../assets/data/List_chocie_data";
import PropsSwiper from "./propsswiper/PropsSwiper";

const Swiperss = () => {
  return (
    <div className="main_swiper">
      <Swiper
        spaceBetween={10}
        slidesPerView={'auto'}
        navigation
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      >
         
          
          {
              List_choice_data.map((item) =>(
                  < SwiperSlide >
                  <PropsSwiper
                    icon={item.icon}
                    icons={item.icons}
                    content_1={item.content_1}
                    content_2={item.content_2}
                    content_3={item.content_3}
                    content_4={item.content_4}
                    content_5={item.content_5}
                  
                  
                  
                  />
                  </SwiperSlide>
              ))
          }
         
       
      </Swiper>
    </div>
  );
};

export default Swiperss;

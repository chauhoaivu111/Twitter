


import React from 'react';

import './SubContent.scss';

const SubContent = props => {
  return (
      
    <div className='main_sub_content_profile'>
        <div className='main_sub_content_profile__content'>
            <div className='icon_follower'>
                <i className={props.icon}/>
                <p className='pfollow'>{props.user_follow}</p>
            </div>
            <div className='frame_img_content'>
                <div className='image'>
                    <img src={props.image}/>
                
                </div>
                <div className='content_user'>
                    <h4>{props.Name}</h4>
                    <p className='pstyle'>{props.Sub_name}</p>
                    <p className='pstyles'>{props.content}</p>

                </div>
            </div>

        </div>
        <div className='main_sub_content_profile__buttonsss'>
            <button>Follow</button>
        </div>



    </div>
  )
}

export default SubContent
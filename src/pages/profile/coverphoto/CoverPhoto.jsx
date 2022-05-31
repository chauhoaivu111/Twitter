
import React from 'react';
import './CoverPhoto.scss';

const CoverPhoto = props => {
  return (
    <div className='Main_coverphoto'>
        <div className='Main_coverphoto__parent'>
            <img src={props.backdrop}/>
        </div>




        <div className='Main_coverphoto__children'>
            <img src={props.avatar_profile}/>
        </div>
        <div  className='Main_coverphoto__buttons_setup'>
            <button>Setup Profile</button>
        </div>
        <div  className='Main_coverphoto__content_profile'>

            <h2>{props.Name}</h2>
            <p>{props.Sub_name}</p>
            <div className='Main_coverphoto__content_profile__joined_date'>
                <i className={props.icon}></i>
                <p>{props.joined_date}</p>
            </div>
            <div  className='Main_coverphoto__content_profile__followss'>
                <p>{props.following}</p>
                <p>{props.follower}</p>
            </div>
        </div>

        
        
        
        
    



    </div>
  )
}

export default CoverPhoto
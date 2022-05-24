
import React from 'react'
import './AppBarRight.scss'
const AppBarRight = props => {
  return (
    <div className='main_frames'>
       

        <div className='main_frames__contents'>
            <div>
            <p className='title'>{props.title}</p>
            <p className='name'>{props.name}</p>
            <p className='number_tweet'>{props.number_tweet}</p>

            </div>

            <div className='frame_icon_appbarright'>
            <i class='bx bx-dots-horizontal-rounded'></i>
            </div>
           
        </div>



    </div>
  )
}

export default AppBarRight
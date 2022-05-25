import React from 'react'

import menu_mobile from '../../../assets/data/Menu_Routes_mobile.json'

import { Link,useLocation } from 'react-router-dom'
import './TopNavHome.scss'
import HV from '../../../assets/image/HV.jpg'
const MenuItem = (props) => {
    const active = props.active ? "active " : "";
  
    return (
        <div className="sidebar__item__mobile">
          <div className={`sidebar__item-inner__mobile ${active}`}>
            <i className={props.icon}></i>
            
    
   
          </div>
        </div>
      );
  };



const TopNavHome = props => {
    const {pathname} = useLocation();
   
   
    const activeItem = menu_mobile.findIndex(
        (item) => item.route === pathname
      );

   
  return (


    <div className='header'>
        <div className='header__wrap'>
            <div className='user_header'>
                <img src={props.image}/>
                <h2>{props.Title}</h2>
            </div>

            <div className='button_right_header'>
            <i class='bx bx-wifi'></i>
            </div>
            
        </div>

        <ul className='menu_icon_moblie'>

        {menu_mobile.map((item, index) => (
        <Link to={item.route} key={index}>
          <MenuItem
            icon={index === activeItem ? item.icons : item.icon}
         
            // bad={index === activeItem ? item.badge : ""}
            // if set active by item.route=== location
            active={index === activeItem}
          />
        </Link>
      ))}

        </ul>
       
       
   
        
        
    </div>
  )
}

export default TopNavHome
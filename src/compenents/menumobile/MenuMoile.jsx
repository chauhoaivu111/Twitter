
import './MenuMobile.scss'

const Menu = (props) => {
  return (
    <div className="content_users">
      <div className="img_button">
        <div className="image">
          <img src={props.image} alt="" />
        </div>
        {/* <button> */}


        <i className={props.BT}></i>
        {/* </button> */}
     
      </div>
      <div className="name">
        <p className='users_name'>{props.name_user}</p>
        <p className='users_name_sub'>{props.sub_name}</p>
      </div>
      <div className='follow'>
        <p>{props.following}</p>
        <p className='follower'>{props.follower}</p>
      </div>
    </div>
  );
};

export const Menu1 = (props) => {
  return (
    <div>
      <div className="content_menu1">
        <i className={props.icons}></i>
        <p> {props.titles}</p>
      </div>
    </div>
  );
};

export const Menu2 = (props) => {
  return (
    <div>
      <div className="content_menu2">
        <i className={props.icons}></i>
        <p> {props.titles}</p>
      </div>
    </div>
  );
};

export const Menu3 = (props) => {
  return (
    <div>
      <div className="content_menu3">
        <i className={props.icons}></i>
        <p> {props.titles}</p>
      </div>
    </div>
  );
};

export default Menu;

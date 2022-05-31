import React from "react";

import TopNavMessages from "../../compenents/topnav/tonavmessages/TopNavMessages";
import "./Messages.scss";
import HV from '../../assets/image/HV.jpg';

const EnveLop = () => {
  const titles = {
    title: "Envelop",
    HV:HV
  };

  return (
    <div className="main_home">
      <TopNavMessages Title={titles.title} image={titles.HV} />

      <div className="frame_messages">
        <div className="frame_content_mess">
          <h1>Welcome to your inbox! </h1>
          <p>
            Drop a line, share Tweets and more with private conversations between you and others on Twitter.
          </p>

          <div className="frame_button_messages">
            <button>Write a messages</button>
          </div>
        </div>
        <div className="style_fit"></div>
      </div> 

       

      <div className="second_appbar">

        <div className="style_fit_padding">
        <h1>Select a message </h1>
          <p className="p_appbar">
          Choose from your existing conversations, start a new one, or just keep swimming.
          </p>
        </div>

       

          <div className="frame_button_messages">
            <button>New messages</button>
          </div>
       
        


      </div>
    </div>
  );
};

export default EnveLop;

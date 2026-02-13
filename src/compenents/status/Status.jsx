import React from "react";

import "./Status.scss";
import { getAvatarUrl } from "../../utils/avatarUrl";

const Status = () => {
  return (
    <div className="status">
      <div className="status__content">
        <div className="status__content__user">
          <img src={getAvatarUrl(0)} alt="" />
        </div>

        <div className="status__content__enter">
          <textarea rows="auto" placeholder="whats happening?"></textarea>
        </div>
      </div>

      <div className="status__icon">
        <div className="frame_icon">
          <button>
            <i class="bx bx-photo-album"></i>
          </button>

          <button>
            {" "}
            <i class="bx bxs-file-gif"></i>
          </button>

          <button>
            <i class="bx bx-poll"></i>
          </button>
          <button>
            <i class="bx bx-confused"></i>
          </button>
          <button>
            <i class="bx bx-time"></i>
          </button>
          <button>
            {" "}
            <i class="bx bx-location-plus"></i>
          </button>
        </div>

        <div className="button_tweet">
        <button >Tweet</button>
      </div>

      </div>
      
    </div>
  );
};

export default Status;

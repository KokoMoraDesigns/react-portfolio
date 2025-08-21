import React from "react";
import contactPagePicture from "../../../static/assets/images/contact<3/contact<3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + contactPagePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">

        <div className="contact-bullet-points">

            <div className="bullet-point-group">

                <div className="icon">
                    <FontAwesomeIcon icon='mobile-retro' />
                </div>
                <div className="text">
                    444-444-4444
                </div>

            </div>

            <div className="bullet-point-group">

                <div className="icon">
                    <FontAwesomeIcon icon='envelope' />
                </div>
                <div className="text">
                    yo.kokomora@gmail.com
                </div>
                
            </div>

            <div className="bullet-point-group">

                <div className="icon">
                    <FontAwesomeIcon icon='map-pin' />
                </div>
                <div className="text">
                    spain
                </div>
                
            </div>

        </div>
        
      </div>
    </div>
  );
}

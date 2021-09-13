import React, { Component, Fragment } from "react";

class MobileHeader extends Component {
  render() {
    return (
      <div className="mob-tab-header">
        <div className="mob-time-wrap">
          <span>11:20 AM</span>
        </div>
        <div className="notch" data-color-fill="TextField1">
          <div className="spaeker"></div>
          <div className="camera"></div>
          <div className="sensor"></div>
        </div>
        <div className="mob-bat-net">
          <i className="fa fa-signal" aria-hidden="true"></i>
          <i className="fa fa-battery-full" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}
export default MobileHeader;

import React, { Component, Fragment } from "react";

class View extends Component {
  render() {

    var { values } = this.props;
    return (
      <div class="Polaris-Layout__Section Polaris-Layout__Section--oneHalf">
        <div class="Polaris-Card">
          <div class="Polaris-Card__Section">
            <div class="mob-tab-container">
              <div class="mob-tab-header">
                <div class="mob-time-wrap">
                  <span>11:20 AM</span>
                </div>
                <div class="notch" data-color-fill="TextField1">
                  <div class="spaeker"></div>
                  <div class="camera"></div>
                  <div class="sensor"></div>
                </div>
                <div class="mob-bat-net">
                  <i class="fa fa-signal" aria-hidden="true"></i>
                  <i class="fa fa-battery-full" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default View;

import React, { Component, Fragment } from "react";
import MobileHeader from "./MobileHeader";
import MobileFooter from "./MobileFooter";
import MobileBody from "./MobileBody";

class View extends Component {
  render() {
    var { name, details, footerTitle, hideIcon, hideArrowIcon,hideIntemBorder,hideSidebarheader,hideSidebarFooter,userCellColor } = this.props.values;
    var bodyData = { name, details, footerTitle, hideIcon, hideArrowIcon,hideIntemBorder,hideSidebarheader,hideSidebarFooter,userCellColor };
    return (
      <div className="Polaris-Layout__Section Polaris-Layout__Section--oneHalf">
        <div className="Polaris-Card">
          <div className="Polaris-Card__Section">
            <div className="droppable-container">
              <div className="mob-tab-container">
                <MobileHeader />
                <MobileBody values={bodyData} />
                <MobileFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default View;

import React, { Component, Fragment } from "react";

class SidebarHeader extends Component {

  render() {
    const { name,details,userCellColor } = this.props.values;
    return (
      <div className="dev-components dev-component-drawer drawer-account-info p-relative" style={{backgroundColor: userCellColor}}>
        <div className="user-logo-img">
          <img src="https://place-hold.it/30x30?text=VP&fontsize=12" alt="" />
        </div>
        <div className="user-info">
          <div className="user-name user-title-color">{name}</div>
          <div className="user-mobile-email user-mobile-color">{details}</div>
        </div>
      </div>
    );
  }
}
export default SidebarHeader;

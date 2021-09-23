import React, { Component, Fragment } from "react";
import SidebarBodyElement from "./SidebarBodyElement";

class SidebarBody extends Component {
    render() {
        var bodyItems = ["My Orders", "My Wishlist", "My Cart", "My Account"];
        const { hideIcon, hideArrowIcon, hideIntemBorder, fontSize, fontWeight, fontStyle } = this.props.values;
        return (
            // bodyItems.map((item) => {
            //     <SidebarBodyElement values={item} />
            // })
            <div className="dev-components dev-component-drawer user-account-options p-relative">
                <ul id="drawerItemContain2" className="drawer-options-contain">
                    {bodyItems.map((item, index) => (
                        <SidebarBodyElement name={item} key={index} hideIcon={hideIcon} hideArrowIcon={hideArrowIcon} hideIntemBorder={hideIntemBorder} fontSize={fontSize} fontWeight={fontWeight} fontStyle={fontStyle} />
                    ))}
                </ul>
            </div>
        );

    }
}
export default SidebarBody;
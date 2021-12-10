import React, { Component, Fragment } from "react";

class SidebarBodyElement extends Component {
    render() {
        const { name, hideIcon, hideArrowIcon, hideIntemBorder, fontSize, fontWeight, fontStyle } = this.props;
        return (
            <li className={"drawer-items border-color cell-color bordered" + (parseInt(hideIntemBorder) ? 'bordered' : '')}>
                <div className="drawer-item-wrap">
                    <div className="drawer-option-icon icon-color" style={parseInt(hideIcon) ? { 'display': 'none' } : { 'display': 'block' }}>
                        <div className="fa fa-shopping-bag"></div>
                    </div>
                    <div className="drawer-option">
                        <div className="drawer-option-title drawer-title-color" style={{ 'fontSize': fontSize, 'fontWeight': fontWeight, 'fontStyle': fontStyle }}>{name}</div>
                    </div>
                    <div className="drawer-arrow-icon arrow-color" style={parseInt(hideArrowIcon) ? { 'display': 'none' } : { 'display': 'block' }}>
                        <div className="fa fa-angle-right"></div>
                    </div>
                </div>
            </li >
        );
    }
}
export default SidebarBodyElement;
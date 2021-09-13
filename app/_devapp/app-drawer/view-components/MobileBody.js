import React, { Component, Fragment } from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarBody from "./SidebarBody";
import SidebarFooter from "./SidebarFooter";

class MobileBody extends Component {
    render() {
        var { name, details, footerTitle, hideIcon, hideArrowIcon, hideIntemBorder, hideSidebarheader, hideSidebarFooter,userCellColor } = this.props.values;
        var headerInfo = { name, details,userCellColor };
        var bodyInfo = { hideIcon, hideArrowIcon, hideIntemBorder };
        var footerInfo = { footerTitle }
        return (
            <div className="mob-tab-body app-drawer-container">
                <div className="app-drawer" data-component-type="app-drawer" data-timestamp="123456">
                    <div className="app-drawer-inner drawer-Color">
                        {!hideSidebarheader ?
                            <SidebarHeader values={headerInfo} /> : null
                        }
                        <SidebarBody values={bodyInfo} />
                        {!hideSidebarFooter ?
                            <SidebarFooter values={footerInfo} /> : null
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default MobileBody;

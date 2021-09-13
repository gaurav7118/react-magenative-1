import React, { Component, Fragment } from "react";

class SidebarFooter extends Component {
    render() {
        var { footerTitle } = this.props.values;
        return (
            <div className="dev-components dev-component-drawer drawer-footer p-relative">
                <ul className="drawer-options-contain">
                    <li className="footer-cell">
                        <div className="drawer-item-wrap footer-text">
                            &copy; {footerTitle}
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
export default SidebarFooter;
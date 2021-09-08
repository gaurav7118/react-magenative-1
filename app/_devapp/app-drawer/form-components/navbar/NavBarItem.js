import React, { Component, Fragment } from "react";

class NavBarItem extends Component {
    render() {
        const { handleClick, name, step } = this.props;
        return (
            <li class={'tab-' + name.toLowerCase()}>
                <a href="javascript:void(0)" onClick={handleClick(step)}>{name}</a>
            </li>
        )
    }
}

export default NavBarItem;
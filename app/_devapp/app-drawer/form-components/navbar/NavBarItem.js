import React, { Component, Fragment } from "react";

class NavBarItem extends Component {
    render() {
        const { handleClick, name, step } = this.props;
        return (
            <li className={'tab-' + name.toLowerCase()} onClick={() => handleClick('step', step)}>
                <a href="">{name}</a>
            </li>
        )
    }
}

export default NavBarItem;
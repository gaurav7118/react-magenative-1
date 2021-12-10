import React, { Component, Fragment } from "react";

class NavBar extends Component {
    render() {
        const { handleClick, navList } = this.props;
        return (
            <ul className="layout-form-tabs">
                {navList.map((name, index) => (
                    <li key={index} className={'tab-' + name.toLowerCase()} onClick={() => handleClick(index + 1)}>
                        <a href="">{name}</a>
                    </li>
                ))}
            </ul>
        )
    }
}
export default NavBar;
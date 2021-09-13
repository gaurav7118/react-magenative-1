import React, { Component, Fragment } from "react";
import NavBarItem from "./NavBarItem";

class NavBar extends Component {
    render() {
        const { handleClick, navList } = this.props;
        return (
            <ul className="layout-form-tabs">
                {navList.map((name, index) => (
                    <NavBarItem key={index} handleClick={handleClick} name={name} step={index + 1} />
                ))}
            </ul>
        )
    }
}
export default NavBar;
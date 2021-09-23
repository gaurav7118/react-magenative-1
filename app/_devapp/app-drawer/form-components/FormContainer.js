import React, { Component, Fragment } from "react";
import NavBar from "./navbar/NavBar";
import LayoutForm from "./forms/LayoutForm";
import ColorForm from "./forms/ColorForm";
import FontForm from "./forms/FontForm";
import UploadForm from "./forms/UploadForm";

class FormContainer extends Component {
  render() {
    const { values, step, handleChange, handleClick, toggleClick } = this.props;
    var navList = ["Layout", "Color", "Font", "Upload"];

    switch (step) {
      case 1:
        return (
          <div className="Polaris-Layout__Section Polaris-Layout__Section--oneHalf">
            <div className="Polaris-Card">
              <div className="components-tools">
                <NavBar handleClick={handleClick} navList={navList} />
                <LayoutForm handleClick={handleClick} />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="Polaris-Layout__Section Polaris-Layout__Section--oneHalf">
            <div className="Polaris-Card">
              <div className="components-tools">
                <NavBar handleClick={handleClick} navList={navList} />
                <ColorForm handleChange={handleChange} />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="Polaris-Layout__Section Polaris-Layout__Section--oneHalf">
            <div className="Polaris-Card">
              <div className="components-tools">
                <NavBar handleClick={handleClick} navList={navList} />
                <FontForm handleChange={handleChange}/>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="Polaris-Layout__Section Polaris-Layout__Section--oneHalf">
            <div className="Polaris-Card">
              <div className="components-tools">
                <NavBar handleClick={handleClick} navList={navList} />
                <UploadForm />
              </div>
            </div>
          </div>
        );
    }
  }
}
export default FormContainer;

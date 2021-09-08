import React, { Component, Fragment } from "react";
import NavBar from "./navbar/NavBar";
import LayoutForm from "./forms/LayoutForm";
import ColorForm from "./forms/ColorForm";
import FontForm from "./forms/FontForm";
import UploadForm from "./forms/UploadForm";

class FormContainer extends Component {
  render() {
    const { value, handleChange, handleClick } = this.props;
    var navList = ["Layout", "Color", "Font", "Upload"];

    switch (value.step) {
      case 1:
        return (
          <div class="Polaris-Layout__Section Polaris-Layout__Section--oneHalf">
            <div class="Polaris-Card">
              <div class="components-tools">
                <NavBar handleClick={handleClick} navList={navList} />
                <LayoutForm />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div class="Polaris-Layout__Section Polaris-Layout__Section--oneHalf">
            <div class="Polaris-Card">
              <div class="components-tools">
                <NavBar handleClick={handleClick} navList={navList} />
                <ColorForm />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div class="Polaris-Layout__Section Polaris-Layout__Section--oneHalf">
            <div class="Polaris-Card">
              <div class="components-tools">
                <NavBar handleClick={handleClick} navList={navList} />
                <FontForm />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div class="Polaris-Layout__Section Polaris-Layout__Section--oneHalf">
            <div class="Polaris-Card">
              <div class="components-tools">
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

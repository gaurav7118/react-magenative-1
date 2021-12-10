import React, { Component, Fragment } from "react";
import NavBar from "./navbar/NavBar";
import LayoutForm from "./forms/LayoutForm";
import ColorForm from "./forms/ColorForm";
import FontForm from "./forms/FontForm";
import UploadForm from "./forms/UploadForm";

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1
    }
  }

  changeStep = (step) => {
    this.setState({ 'step': step });
  }

  getForm(step) {
    const { values, changeParentState } = this.props;
    switch (parseInt(step)) {
      case 1:
        return <LayoutForm updateState={changeParentState} values={values} />
      case 2:
        return <ColorForm handleChange={changeParentState} values={values} />
      case 3:
        return <FontForm handleChange={changeParentState} values={values} />
      case 4:
        return <UploadForm handleChange={changeParentState} values={values} />
    }
  }

  render() {
    const { undoChanges, saveChanges } = this.props;
    const navList = ["Layout", "Color", "Font", "Upload"];
    return (
      <div className="Polaris-Layout__Section p-relative Polaris-Layout__Section--oneHalf">
        <div className="Polaris-Card">
          <div className="components-tools mt-15">
            <NavBar handleClick={this.changeStep} navList={navList} />
            {this.getForm(this.state.step)}
          </div>
          <div className="Polaris-Card__Section p-20">
            <div className="Polaris-Stack Polaris-Stack--alignmentBaseline Polaris-Stack--distributionTrailing">
              <div className="Polaris-Stack__Item">
                <div className="Polaris-ButtonGroup">
                  <div className="Polaris-ButtonGroup__Item">
                    <button type="button" className="Polaris-Button" onClick={() => undoChanges}><span className="Polaris-Button__Content"><span className="Polaris-Button__Text">Cancel</span></span></button>
                  </div>
                  <div className="Polaris-ButtonGroup__Item">
                    <button type="button" className="Polaris-Button Polaris-Button--primary" onClick={() => saveChanges}><span className="Polaris-Button__Content"><span className="Polaris-Button__Text">Apply Changes</span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FormContainer;
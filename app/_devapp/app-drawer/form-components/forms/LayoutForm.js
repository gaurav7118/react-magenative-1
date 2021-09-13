import React, { Component, Fragment } from "react";
import ToggleButton from "./input-fields/ToggleButton";

class LayoutForm extends Component {
    render() {
        var { handleClick } = this.props;
        return (
            <div className="components-tools-inner-wrap">
                <div id="tab-content-layout" className="Polaris-Card has-overflow custom-tab-content">
                    <div className="Polaris-Card__Section">
                        <div className="Polaris-FormLayout">
                            <ToggleButton handleClick={handleClick} label={'Hide Icon'} target={'hideIcon'} />
                            <ToggleButton handleClick={handleClick} label={'Hide Arrow Icon'} target={'hideArrowIcon'} />
                            <ToggleButton handleClick={handleClick} label={'Item Border'} target={'hideIntemBorder'} />
                            <ToggleButton handleClick={handleClick} label={'user'} target={'hideSidebarheader'} />
                            <ToggleButton handleClick={handleClick} label={'Footer'} target={'hideSidebarFooter'} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LayoutForm;
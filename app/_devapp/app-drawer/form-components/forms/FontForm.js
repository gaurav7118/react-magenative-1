import React, { Component, Fragment } from "react";
import SelectBox from "./input-fields/SelectBox";

class FontForm extends Component {
    fontSize = {
        '12px': '12px',
        '13px': '13px',
        '14px': '14px',
        '15px': '15px'
    }
    fontWeight = {
        '300': 'Light',
        '500': 'Normal',
        '600': 'Bold'
    }
    fontStyle = {
        'normal': 'Normal',
        'italic': 'Italic'
    }
    render() {
        const { handleChange } = this.props;
        return (
            <div className="components-tools-inner-wrap">
                <div id="tab-content-font" className="Polaris-Card has-overflow">
                    <div className="Polaris-Card__Section">
                        <div className="Polaris-FormLayout" data-component-wrap="font-update-wrapper">
                            <SelectBox handleChange={handleChange} fontData={this.fontSize} label="Font Size" name="fontSize" />
                            <SelectBox handleChange={handleChange} fontData={this.fontWeight} label="Font Weight" name="fontWeight" />
                            <SelectBox handleChange={handleChange} fontData={this.fontStyle} label="Font Style" name="fontStyle" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default FontForm;
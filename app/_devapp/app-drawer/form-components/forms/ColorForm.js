import React, { Component, Fragment } from "react";

class ColorForm extends Component {
    componentDidMount() {
        initminiColor();
    }
    colortest() {
        console.log("hello");
    }
    handleInputChange(e) {
        console.log('CHANGE')
    }
    render() {
        return (
            <div className="components-tools-inner-wrap">
                <div id="tab-content-color" className="Polaris-Card has-overflow">
                    <div className="Polaris-Card__Section p-0" data-component-wrap="user-header-color">
                        <div className="Polaris-Card__SectionHeader accordion-header p-20 active-accordion">
                            <h3 className="Polaris-Subheading">User Color Options</h3>
                        </div>
                        <div className="Polaris-FormLayout accordion-body px-20 pb-20">
                            <div className="Polaris-FormLayout__Item" data-component-wrap="user-bg-color">
                                <div className="">
                                    <div className="Polaris-Labelled__LabelWrapper">
                                        <div className="Polaris-Label"><label id="TextField4Label" htmlFor="TextField4" className="Polaris-Label__Text">User Cell Color</label></div>
                                    </div>
                                    <div className="Polaris-TextField has-mini-color test">
                                        <input data-element=".drawer-account-info" data-attr-name="background-color" className="Polaris-TextField__Input mini-color" data-swatches="#ef4836|#2ecc71|#f3234a|#0ebed0|#000000|#fff700" data-minicolor-callback="setPoint" type="text" />
                                        <div className="Polaris-TextField__Backdrop"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ColorForm;
import React, { Component, Fragment } from "react";

class ToggleButton extends Component {
    render() {
        const { label, target } = this.props;
        const testFunction = (el) => {
            // console.log(el);
            let val = this.inputValue.value;
            console.log(val);
            //this.props.handleClick(target, parseInt(val));
        }
        return (
            <div className="Polaris-FormLayout__Item" data-component-wrap="product-title-show-hide">
                <div className="Polaris-Stack Polaris-Stack--spacingNone Polaris-Stack--distributionEqualSpacing">
                    <div className="Polaris-Stack__Item">
                        <div className="Polaris-Labelled__LabelWrapper">
                            <div className="Polaris-Label">
                                <label id="TextField4Label" htmlFor="TextField4" className="Polaris-Label__Text"><span>{label}</span></label>
                            </div>
                        </div>
                    </div>
                    <div className="Polaris-Stack__Item">
                        <label htmlFor="" className="Custom-Polaris-switch switch" onClick={() => testFunction()}>
                            <input className="switch-input required" type="checkbox" ref={function (node) { this.inputValue = node }.bind(this)} />
                            <span className="switch-label"></span>
                            <span className="switch-handle"></span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}
export default ToggleButton;
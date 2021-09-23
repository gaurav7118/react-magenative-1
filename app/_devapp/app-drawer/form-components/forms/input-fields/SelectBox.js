import React, { Component, Fragment } from "react";

class SelectBox extends Component {
    render() {
        return (
            <div className="Polaris-FormLayout__Item">
                <div className="">
                    <div className="Polaris-Labelled__LabelWrapper">
                        <div className="Polaris-Label">
                            <label id="TextField4Label" htmlFor="TextField4" className="Polaris-Label__Text">{this.props.label}</label>
                        </div>
                    </div>
                    <div className="Polaris-Select">
                        <select id="item-title-font-size" className="Polaris-Select__Input" data-typo-changer=".drawer-option-title" data-typo-selector="font-size" onChange={(event) => { this.props.handleChange(this.props.name, event.target.value) }}>
                            {
                                Object.keys(this.props.fontData).map((oneKey, i) => {
                                    return (
                                        <option key={i} value={oneKey}>{this.props.fontData[oneKey]}</option>
                                    )
                                })
                            }

                        </select>
                        <div className="Polaris-Select__Content">
                            <span className="Polaris-Select__SelectedOption">{this.props.fontData[Object.keys(this.props.fontData)[0]]}</span>
                            <span className="Polaris-Select__Icon">
                                <span className="Polaris-Icon">
                                    <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                        <path d="M13 8l-3-3-3 3h6zm-.1 4L10 14.9 7.1 12h5.8z" fillRule="evenodd"></path>
                                    </svg>
                                </span>
                            </span>
                        </div>
                        <div className="Polaris-Select__Backdrop"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectBox;
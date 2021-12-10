import React, { Component, Fragment } from "react";
import ToggleButton from "./input-fields/ToggleButton";
import IconPicker from "./input-fields/IconPicker";

class LayoutForm extends Component {
    render() {
        var { updateState, values } = this.props;
        var data = [
            {
                title: "Header Options",
                fields: [
                    {
                        component: ToggleButton,
                        props: {
                            handleClick: updateState,
                            label: 'Hide Icon',
                            target: 'hideIcon'                        }
                    },
                    // {
                    //     component: ToggleButton,
                    //     props: {
                    //         handleClick: updateState,
                    //         label: 'Hide Arrow Icon',
                    //         target: 'hideArrowIcon'
                    //     }
                    // }
                ]
            },
            // {
            //     title: "Body Options",
            //     fields: [
            //         {
            //             component: ToggleButton,
            //             props: {
            //                 handleClick: updateState,
            //                 label: 'Hide Icon',
            //                 target: 'hideIcon'
            //             }
            //         },
            //         {
            //             component: ToggleButton,
            //             props: {
            //                 handleClick: updateState,
            //                 label: 'Hide Arrow Icon',
            //                 target: 'hideArrowIcon'
            //             }
            //         }
            //     ]
            // }
        ]
        return (
            <div className="components-tools-inner-wrap" >
                <div id="tab-content-layout" className="Polaris-Card has-overflow custom-tab-content">
                    {data.map((element, index) => (
                        <div className="Polaris-Card__Section p-0" key={index}>
                            <div className={"Polaris-Card__SectionHeader accordion-header p-20 " + (!index ? "active-accordion" : "")}>
                                <h3 className="Polaris-Subheading">{element.title}</h3>
                            </div>
                            <div className="Polaris-FormLayout accordion-body px-20 pb-20" style={!index ? { display: "block" } : { display: "none" }}>
                                {
                                    (element.fields).map((temp, count) => (
                                        React.createElement(temp.component, { key: count, ...temp.props })
                                    ))
                                }
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        )
    }
}
export default LayoutForm;
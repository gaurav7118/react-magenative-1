import React, { Component, Fragment } from "react";
import { Button } from "@shopify/polaris";
import axios from "axios";
import FormContainer from "./form-components/FormContainer";
import View from "./view-components/View";

// import React, {useCallback, useState} from 'react';
// import {Checkbox} from '@shopify/polaris';

class AppDrawer extends Component {
    state = {
        step: 1,
        hideIcon: 0,
        hideArrowIcon: 0,
        hideIntemBorder: 0,
        hideSidebarheader: 0,
        hideSidebarFooter: false,
        fontSize: '',
        fontWeight: '',
        fontStyle: '',
        userCellColor: 'white',
        name: 'Shubham Verma',
        details: 'shubham@gmail.com',
        footerTitle: '2019 Magenative'
    }

    handleChange = (name, val) => {
        this.setState({ [name]: val });
        console.log(name + ':' + val);
        //this.setState({ [input]: e.target.checked });
    };

    handleClick = (name, val) => {
        // console.log(val);
        this.setState({ [name]: val });
        //console.log(this.state.hideIntemBorder)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { checkbox } = this.state;
        const values = { checkbox };
        axios
            .post("https://localhost/my-app/file1.php", values)
            .then((response) => {
                console.log('Success');
                //this.setState({ step: 3 });
            })
            .catch((error) => {
                console.log(error);
            });
    };


    componentDidMount() {
        window.setPoint = (a, b, c) => this.setState({ 'userCellColor': c });
    }

 //     axios
        //         .get("https://localhost/my-app/file2.php")
        //         .then((response) => {
        //             let data = response.data;
        //             console.log(data);
        //             for (const property in data) {
        //                 let key = `${property}`;
        //                 let value = `${data[property]}`;
        //                 this.setState({ [key]: value });
        //                 console.log(key + ':' + Boolean(value));
        //             }
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //         });
    render() {
        const { step, name, details, footerTitle, hideIcon, hideArrowIcon, hideIntemBorder, hideSidebarheader, hideSidebarFooter, userCellColor, fontSize, fontWeight, fontStyle } = this.state;
        const componentValues = { name, details, footerTitle, hideIcon, hideArrowIcon, hideIntemBorder, hideSidebarheader, hideSidebarFooter, userCellColor, fontSize, fontWeight, fontStyle };
        return (
            <div className="Polaris-Page__Content">
                <div className="Polaris-Tabs__Panel">
                    <div id="landing-tab" className="Polaris-Layout active-tab">
                        <FormContainer handleChange={this.handleChange} handleClick={this.handleClick} values={componentValues} step={step} />
                        <View values={componentValues} />
                    </div>
                </div>
            </div>
        )
    }
}
export default AppDrawer;
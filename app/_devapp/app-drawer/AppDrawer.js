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
        checkbox: ''
    }

    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.checked });
    };

    handleClick = (input) => (e) => {
        this.setState({ step: input });
        console.log(input);
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

    // componentDidMount() {
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
    // }


    render() {
        const { step } = this.state;
        const values = { step };
        return (
            <div class="Polaris-Page__Content">
                <div class="Polaris-Tabs__Panel">
                    <div id="landing-tab" class="Polaris-Layout active-tab">
                        <FormContainer handleChange={this.handleChange} handleClick={this.handleClick} value={values} />
                        <View value={values} />
                    </div>
                </div>
            </div>
        )
    }
}
export default AppDrawer;
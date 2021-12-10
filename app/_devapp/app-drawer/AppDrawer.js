import React, { Component, Fragment } from "react";
import axios from "axios";
import FormContainer from "./form-components/FormContainer";
import View from "./view-components/View";

// import React, {useCallback, useState} from 'react';
// import {Checkbox} from '@shopify/polaris';

class AppDrawer extends Component {
    state = {
        hideIcon: 0,
        hideArrowIcon: 0,
        hideIntemBorder: 0,
        hideSidebarheader: 0,
        hideSidebarFooter: false,
        fontSize: '',
        fontWeight: '',
        fontStyle: '',
        userCellColor: 'white',
        headerIcon: 'https://place-hold.it/30x30?text=SV&fontsize=15',
        name: 'Shubham Verma',
        details: 'shubham@gmail.com',
        footerTitle: '2019 Magenative',
        formErrors: {}
    }

    changeParentState = (name, val) => {
        this.setState({ [name]: val });
    }

    handleChange = (name, val) => {
        this.setState({ [name]: val });
        //console.log(name + ':' + val);
        //this.setState({ [input]: e.target.checked });
    };

    handleClick = (name, val) => {
        this.setState({ [name]: val });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { checkbox } = this.state;
        const values = { checkbox };
        axios
            .post("https://localhost/my-app/file1.php", values)
            .then((response) => {
                //console.log('Success');
                //this.setState({ step: 3 });
            })
            .catch((error) => {
                //console.log(error);
            });
    };


    componentDidMount() {
        window.setPoint = (a, b, c) => this.setState({ 'userCellColor': c });
        axios
            .get(`${this.props.url}/app-drawer/getdata`)
            .then((response) => {
                let data = response.data;
                //console.log(data);
                for (const property in data) {
                    let key = `${property}`;
                    let value = `${data[property]}`;
                    this.setState({ [key]: value });
                    //console.log(value + ':' + typeof value);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    validateInput = () => {
        const { userCellColor } = this.state;
        let formErrors = {};
        let formIsValid = true;
        if (!userCellColor) {
            formIsValid = false;
            formErrors["userCellColor"] = "Color required.";
        }
        console.log(formErrors);
        this.setState({ formErrors: formErrors })
        return formIsValid;

    }

    undoChanges = () => {

    }
    saveChanges = () => {
        const { name, details, footerTitle, hideIcon, hideArrowIcon, hideIntemBorder, hideSidebarheader, hideSidebarFooter, userCellColor, fontSize, fontWeight, fontStyle, headerIcon } = this.state;


    }
    render() {
        const saveData = (e) => {
            if (this.validateInput()) {
                e.preventDefault();
                axios({
                    method: 'post',
                    url: `${this.props.url}/app-drawer/savedata`,
                    data: componentValues
                })
                    .then(result => {
                        let temp = (result.data.success) ? "Success" : "Fail";
                        alert(temp);
                    })
                    .catch(error => console.log(error));
            } else {
                alert("Error");
            }
        }
        return (
            <div className="Polaris-Page__Content">
                <div className="Polaris-Tabs__Panel">
                    <div className="Polaris-Stack__Item m-10">
                        <div className="Polaris-ButtonGroup">
                            <div className="Polaris-ButtonGroup__Item"><button type="button" className="Polaris-Button Polaris-Button--primary" onClick={saveData}><span className="Polaris-Button__Content"><span className="Polaris-Button__Text">Save</span></span></button></div>
                        </div>
                    </div>
                    <div id="landing-tab" className="Polaris-Layout active-tab">
                        <FormContainer changeParentState={this.changeParentState} undoChanges={this.undoChanges} saveChanges={this.saveChanges} values={this.state} />
                        <View values={this.state} />
                    </div>
                </div>
            </div>
        )
    }
}
export default AppDrawer;
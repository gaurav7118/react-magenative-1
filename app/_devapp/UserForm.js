import React, { Component, Fragment } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import FormConclusion from "./FormConclusion";
import NavBar from "./NavBar";
import { Button } from "@shopify/polaris";
import axios from "axios";

class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    city: "",
  };

  changeStep = (input) => (e) => {
    this.setState({ step: input });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, city } = this.state;
    const values = { firstName, lastName, email, city };
    axios
      .post("http://localhost/cropper-test/react-test.php", values)
      .then((response) => {
        this.setState({ step: 3 });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  componentDidMount() {
    axios
      .get("http://localhost/cropper-test/react-test2.php")
      .then((response) => {
        let data = response.data;
        for (const property in data) {
          let key = `${property}`;
          let value = `${data[property]}`;
          this.setState({ [key]: value });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, city } = this.state;
    const values = { firstName, lastName, email, city };

    switch (step) {
      case 1:
        return (
          <div>
            <NavBar changeStep={this.changeStep} />
            <FormUserDetails handleChange={this.handleChange} values={values} />
            <Button onClick={this.handleSubmit}>Submit</Button>
          </div>
        );
      case 2:
        return (
          <div>
            <NavBar changeStep={this.changeStep} />
            <FormPersonalDetails
              handleChange={this.handleChange}
              values={values}
            />
            <Button onClick={this.handleSubmit}>Submit</Button>
          </div>
        );
      case 3:
        return (
          <div>
            <NavBar changeStep={this.changeStep} />
            <FormConclusion />
          </div>
        );
    }
  }
}

export default UserForm;

import React, { Component, Fragment } from 'react';
import { TextField } from '@shopify/polaris';

class FormUserDetails extends Component {
    render() {
        const { values, handleChange } = this.props;
        return (
            <>
                <div className='FormInput'>
                    <label>First Name</label><br />
                    <input type="text" placeholder="Enter Your First Name" onChange={handleChange('firstName')} defaultValue={values.firstName} /><br />
                </div>
                <div className='FormInput'>
                    <label>Last Name Name</label><br />
                    <input type="text" placeholder="Enter Your Last Name" onChange={handleChange('lastName')} defaultValue={values.lastName} /><br />
                </div>
            </>
        )
    }
}

export default FormUserDetails;
import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';

class FormPersonalDetails extends Component {
    render() {
        const { values, handleChange } = this.props;

        return (
            <>
                <div className='FormInput'>
                    <label>Email</label><br />
                    <input type="text" placeholder="Enter Your Email" onChange={handleChange('email')} defaultValue={values.email} /><br />
                </div>
                <div className='FormInput'>
                    <label>City</label><br />
                    <input type="text" placeholder="Enter Your City" onChange={handleChange('city')} defaultValue={values.city} /><br />
                </div>
            </>
        )
    }
}

export default FormPersonalDetails;
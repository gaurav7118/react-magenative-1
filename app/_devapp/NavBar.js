import React, { Component, Fragment } from 'react';
import { Stack } from '@shopify/polaris';

class NavBar extends Component {
    render() {
        const { changeStep } = this.props;
        return (
            <div className='navbar'>
                <Stack>
                    <span onClick={changeStep(1)}>User Details</span>
                    <span onClick={changeStep(2)} > Personal Details</span>
                    <span onClick={changeStep(3)}> Conclusion</span>
                </Stack>
            </div>
        )
    }
}
export default NavBar;
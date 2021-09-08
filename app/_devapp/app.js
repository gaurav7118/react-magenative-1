import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Heading } from '@shopify/polaris';
import "@shopify/polaris/dist/styles.css";
import UserForm from './UserForm';
import AppDrawer from './app-drawer/AppDrawer'

/** We are importing our index.php my app Vairaible */
import myApp from 'myApp';

/* globals __webpack_public_path__ */
__webpack_public_path__ = `${window.STATIC_URL}/app/assets/bundle/`;


class Myapp extends Component {
    render() {

        const { user: { name, email }, logged } = myApp;

        return (
            <AppProvider i18n={enTranslations} theme={{ colorScheme: "light" }} >
                <AppDrawer />
            </ AppProvider>
        )
    }
}

render(<Myapp />, document.getElementById('app'));
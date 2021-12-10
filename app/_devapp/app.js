import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import AppDrawer from "./app-drawer/AppDrawer";

/** We are importing our index.php my app Vairaible */
import moduleData from "moduleData";

/* globals __webpack_public_path__ */
__webpack_public_path__ = `${window.STATIC_URL}/app/assets/bundle/`;

class App extends Component {
    render() {
        const { url } = moduleData;
        return (
            <div>
                <AppDrawer url={url} />
            </div>
        );
    }
}

render(<App />, document.getElementById("app"));
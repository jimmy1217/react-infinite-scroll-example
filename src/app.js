import { hot } from 'react-hot-loader'
import React, { Component } from 'react';
import RootPage from 'containers/RootPage';
import { Provider, onError } from 'mobx-react';
import * as stores from './store'

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Provider {...stores}>
                <RootPage />
            </Provider>
        );
    }
}

/** mobx data flow */




// onError(error => {
//     console.log('----mobx-error-msg----')
//     console.log(error)
// })

export default hot(module)(App)
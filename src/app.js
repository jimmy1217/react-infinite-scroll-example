import { hot } from 'react-hot-loader'
import React from 'react';
/** mobx data flow */
import * as stores from './store'
import { Provider, onError } from 'mobx-react';
import RootPage from '@containers';

const App = () => (
    <Provider {...stores}>
        <RootPage />
    </Provider>
)

onError(error => {
    console.log('----mobx-error-msg----')
    console.log(error)
})

export default hot(module)(App)
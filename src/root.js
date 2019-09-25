import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(<App />,
    document.getElementById('root'))
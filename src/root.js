import * as OfflinePluginRuntime from 'offline-plugin/runtime';

OfflinePluginRuntime.install({
  onUpdateReady: () => {
    OfflinePluginRuntime.applyUpdate()
  },
  onUpdated: () => {    
    window.swUpdate = true
  }
})

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(<App />,
    document.getElementById('root'))
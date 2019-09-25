import { hot } from 'react-hot-loader'
import React, { Component } from 'react';
import RootPage from 'containers/RootPage';
import { Provider, onError } from 'mobx-react';
import * as stores from './store'
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

/** global style */
const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    font-family: Microsoft JhengHei,Helvetica Neue,Helvetica,Arial,sans-serif;
  }
  .m-0 {
    margin: 0;
  }
  .mr-5 {
    margin-right:5px;
  }
  .mb-5 {
    margin-bottom:5px;
  }
`;

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <GlobalStyle />
                <Provider {...stores}>
                    <RootPage />
                </Provider>
            </div>
        );
    }
}

/** mobx data flow */
onError(error => {
    console.log('----mobx-error-msg----')
    console.log(error)
})

export default hot(module)(App)
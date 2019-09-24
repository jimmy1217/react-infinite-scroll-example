import React from 'react';
import { inject, observer } from 'mobx-react';

const PageRoot = (props) => {
    return <div>1223</div>
}
export default inject('RootPageStore')(observer(PageRoot));
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { SearchBar, List } from 'components';

@inject('RootPageStore')
@observer
class PageRoot extends Component {
    constructor(props) {
        super(props);
    }
    searchBarOnChange = (e) => {
        const { paramsAssign } = this.props.RootPageStore;
        paramsAssign({ keyword: e.target.value });
    }
    render() {
        const { onSubmit, getNextPage } = this.props.RootPageStore;
        return (
            <div>
                <SearchBar
                    store={this.props.RootPageStore}
                    valueKey="keyword"
                    onChange={this.searchBarOnChange}
                    onSubmit={onSubmit} />
                <List
                    store={this.props.RootPageStore}
                    getNextPage={getNextPage} />
            </div>
        );
    }
}

export default PageRoot;
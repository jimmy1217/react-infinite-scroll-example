import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { SearchBar, List } from 'components';

@inject('RootPageStore')
@observer
class PageRoot extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onSubmit, getNextPage, searchBarOnChange } = this.props.RootPageStore;
        return (
            <div>
                <SearchBar
                    store={this.props.RootPageStore}
                    valueKey="keyword"
                    onChange={searchBarOnChange}
                    onSubmit={onSubmit} />
                <List
                    store={this.props.RootPageStore}
                    getNextPage={getNextPage} />
            </div>
        );
    }
}

export default PageRoot;
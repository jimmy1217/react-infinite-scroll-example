import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { SearchBar, List, PlaceholderBar } from 'components';

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
                    onSubmit={onSubmit}
                    placeholder="輸入完畢後按下 Enter" />
                <List
                    store={this.props.RootPageStore}
                    getNextPage={getNextPage} />
            </div>
        );
    }
}

export default PageRoot;
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
        const { onSubmit, searchBarOnChange, list, isFetching, isLock, getNextPage, lockTime } = this.props.RootPageStore;
        return (
            <div>
                <SearchBar
                    store={this.props.RootPageStore}
                    valueKey="param_keyword"
                    onChange={searchBarOnChange}
                    onSubmit={onSubmit}
                    placeholder="輸入完畢後按下 Enter9" />
                <List
                    list={list}
                    isFetching={isFetching}
                    isLock={isLock}
                    lockTime={lockTime}
                    getNextPage={getNextPage} />
            </div>
        );
    }
}

export default PageRoot;
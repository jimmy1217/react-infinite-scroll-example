import React from 'react';
import { SearchBarStyle } from './style';
import { observer } from 'mobx-react';

const SearchBar = ({ valueKey, store, onSubmit, ...etc }) => {
    return (
        <SearchBarStyle>
            <form onSubmit={onSubmit}>
                <input type="text" {...etc} value={store.params[valueKey]} />
                <input type="hidden" value="" />
            </form>
        </SearchBarStyle>
    )
}


export default observer(SearchBar);
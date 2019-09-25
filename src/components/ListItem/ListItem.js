import React from 'react';
import { observer } from 'mobx-react';

const ListItem = ({ item }) => {
    return (
        <div className="listItem">
            <div>
                <div className="mr-5">{item.owner.login}</div>
                <a href={item.html_url} target="_blink">{item.name}</a>
                <div className="lang">{item.language}</div>
            </div>
        </div>
    );
}

export default observer(ListItem);
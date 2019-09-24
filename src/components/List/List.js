import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { ListStyle } from './style';

@observer
class List extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener(this.handleScroll)
    }
    handleScroll = () => {
        const pageHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight);
        const viewportHeight = window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight || 0;

        const scrollHeight = window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop || 0;

        const scrollAtBottom = viewportHeight + scrollHeight === pageHeight
        console.log(`scrollHeight`, scrollHeight)
        if (scrollAtBottom) {
            this.props.getNextPage();
        }
    }

    render() {
        const resultList = this.props.store.list;
        return (
            <ListStyle>
                {resultList.map(item => {
                    return (
                        <div key={item.node_id} className="listItem">
                            {item.owner.login} <a href={item.html_url} target="_blink">{item.name}</a>
                            {item.stargazers_count}
                        </div>)
                })}
            </ListStyle>
        );
    }
}

export default List;
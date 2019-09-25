import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { ListStyle } from './style';
import PlaceholderBar from './../PlaceholderBar';


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
        if (scrollAtBottom) {
            this.props.getNextPage();
        }
    }

    render() {
        const resultList = this.props.store.list;
        const isFetching = this.props.store.isFetching;
        return (
            <ListStyle>
                {resultList.map((item, i) => {
                    const unique_id = `${item.node_id}_${i}` /** node_id 跟 id都撞... */
                    return (
                        <div key={unique_id} className="listItem">
                            <div>
                                <div className="mr-5">{item.owner.login}</div>
                                <a href={item.html_url} target="_blink">{item.name}</a>
                                <div className="lang">{item.language}</div>
                            </div>
                        </div>)

                })}
                {isFetching &&
                    <div style={{ width: '100%', maxWidth: '600px' }}>
                        <div style={{ padding: '10px 0' }}>
                            <PlaceholderBar height="20px" className="mb-5" blockArr={[1, 1, 1, 0, 0, 0, 0, 0, 0, 0]} />
                            <PlaceholderBar height="20px" className="mb-5" blockArr={[1, 0, 1, 1, 1, 1, 0, 0, 0, 0]} />
                            <PlaceholderBar height="20px" className="mb-5" blockArr={[1, 1, 0, 1, 1, 1, 0, 0, 0, 0]} />
                        </div>
                        <div style={{ padding: '10px 0' }}>
                            <PlaceholderBar height="20px" className="mb-5" blockArr={[1, 1, 1, 0, 1, 1, 1, 0, 0, 0]} />
                            <PlaceholderBar height="20px" className="mb-5" blockArr={[1, 0, 1, 1, 1, 0, 0, 0, 0, 0]} />
                            <PlaceholderBar height="20px" className="mb-5" blockArr={[1, 1, 0, 0, 1, 1, 0, 0, 0, 0]} />
                        </div>
                        <div style={{ padding: '10px 0' }}>
                            <PlaceholderBar height="20px" className="mb-5" blockArr={[1, 1, 1, 0, 0, 0, 0, 0, 0, 0]} />
                            <PlaceholderBar height="20px" className="mb-5" blockArr={[1, 0, 1, 1, 1, 1, 0, 0, 0, 0]} />
                            <PlaceholderBar height="20px" className="mb-5" blockArr={[1, 1, 0, 1, 1, 1, 0, 0, 0, 0]} />
                        </div>
                    </div>
                }
            </ListStyle>
        );
    }
}

export default List;
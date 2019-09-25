import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { ListStyle } from './style';
import PlaceholderBar from 'components/PlaceholderBar';
import ListItem from 'components/ListItem';

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
        const { list, isFetching, isLock, lockTime } = this.props;
        return (
            <ListStyle>
                {list.map((item, i) => {
                    const unique_id = `${item.node_id}_${i}` /** node_id 跟 id都撞... */
                    return (<ListItem key={unique_id} item={item} />)
                })}
                {(isFetching || isLock) &&
                    <div style={{ width: '100%', maxWidth: '600px' }}>
                        {isLock && <p>太猴急了!! 請等個{lockTime}秒</p>}
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
                            <PlaceholderBar height="20px" className="mb-5" blockArr={[1, 1, 0, 1, 1, 1, 1, 1, 0, 0]} />
                        </div>
                    </div>
                }
            </ListStyle>
        );
    }
}

export default List;
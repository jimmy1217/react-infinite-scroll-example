import React from 'react';
import { observer } from 'mobx-react';
import { PlaceholderBarStyle } from './style';

@observer
class PlaceholderBar extends React.Component {
    render() {
        const maskColor = this.props.maskColor || '#fff';
        const className = this.props.className || '';
        const height = this.props.height || '30px';
        const blockArr = this.props.blockArr || [1, 0, 1, 1, 0, 1, 1, 1, 1, 1];
        return (
            <PlaceholderBarStyle>
                <div className={`mask-wrapper ${className}`}>
                    <div className="animated-background" style={{ height, backgroundSize: '300px' }}>
                        {blockArr.map((display, i) =>
                            <div
                                key={`placeholderBar_${i}`}
                                className={`background-masker ${!display ? 'w-10' : ''} lt-${i * 10}`}
                                style={{ backgroundColor: maskColor }}>
                            </div>)}
                    </div>
                </div>
            </PlaceholderBarStyle>
        );
    }
}

export default PlaceholderBar;
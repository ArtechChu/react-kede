import React, { Component } from 'react';
import { getWindowScrollFromSession } from '../../tools/Utility';
class ScrollRestoration extends Component {
    componentDidMount() {
        let autoScrollToInfo = getWindowScrollFromSession(this.props.path);
        if (autoScrollToInfo) {
            window.scrollTo(autoScrollToInfo.x, autoScrollToInfo.y);
        }
    }
    render() {
        return (null);
    }
}

export default ScrollRestoration;
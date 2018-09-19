import React, { Component } from 'react';
import { getWindowScrollFromSession } from '../../tools/Utility';
class ScrollRestoration extends Component {
    componentDidMount() {
        console.log("开始加载页面：ScrollRestoration,path=%o", this.props.path);
        let autoScrollToInfo = getWindowScrollFromSession(this.props.path);
        if (autoScrollToInfo) {
            console.log("Restore Scroll info :%o", autoScrollToInfo);

            window.scrollTo(autoScrollToInfo.x, autoScrollToInfo.y);
        }
    }
    render() {
        return (null);
    }
}

export default ScrollRestoration;
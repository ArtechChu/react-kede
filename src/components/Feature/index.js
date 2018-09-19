import React, { Component, Fragment } from 'react';
import { setWindowScrollToSession, autoWindowScroll, getWindowScrollFromSession } from '../../tools/Utility';
import axios from 'axios';
class Feature extends Component {
    state = {
        content: "这里是首页",
    }
    render() {
        return (
            <Fragment>
                <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
            </Fragment>
        )

    }

    componentDidMount() {
        axios.get("/api/feature.json").then(res => {
            console.log(this.props.location.pathname)
            this.setState(() => ({
                content: res.data.data
            }), () => {
                // autoWindowScroll(this.props.location.pathname)
                let path = this.props.location.pathname;
                let scrollInfo = getWindowScrollFromSession(path);
                if (!scrollInfo) return;
                console.log("auto scroll:%o", typeof scrollInfo.y);
                
                window.scrollTo(scrollInfo.x, scrollInfo.y);
            });
        });

    }

    componentWillUnmount() {
        setWindowScrollToSession(this.props.location.pathname);
    }
}

export default Feature;
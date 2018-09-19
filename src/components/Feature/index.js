import React, { Component, Fragment } from 'react';
import { setWindowScrollToSession ,autoWindowScroll} from '../../tools/Utility';
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
            this.setState(() => ({
                content: res.data.data
            }), () => {
                autoWindowScroll(this.props.location.pathname);
            });
        });

        
    }

    componentWillUnmount() {
        setWindowScrollToSession(this.props.location.pathname);
    }
}

export default Feature;
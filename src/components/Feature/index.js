import React, { Component } from 'react';
// import http from '../../tools/HttpUtility';
import axios from 'axios';
class Feature extends Component {
    state = {
        content: "这里是首页"
    }
    render() {
        return <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
    }

    componentDidMount() {
        axios.get("/api/feature.json").then(res => {
            console.log(res.data.data)

            this.setState({
                content: res.data.data
            })
        });


    }
}

export default Feature;
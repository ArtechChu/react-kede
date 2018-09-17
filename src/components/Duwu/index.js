import React, { Component } from 'react'
import ScrollToTopOnMount from '../ScrollToTopOnMount';
class Duwu extends Component {
    render() {
        return (
            <div style={{ height: "600px", margin: "50% auto" }}>
                这里是毒物页面
                <ScrollToTopOnMount> </ScrollToTopOnMount>
            </div>
        );
    }
}

export default Duwu;
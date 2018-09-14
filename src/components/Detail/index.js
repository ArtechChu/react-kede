import React, { Component } from 'react'

class Detail extends Component{
    render(){
        return <div style={{height:"600px", margin:"50% auto"}}>这里是商品详情页：商品Seocode= {this.props.match.params.seocode}</div>
    }
}

export default Detail;
import React, { Component } from 'react';
import {NavItemLink} from './style';

class Cart extends Component {
    render() {
        return (
        <div style={{ height: "600px", margin: "50% auto" }}>
                这里是购物车页面
                <NavItemLink to="/cart" activeClassName="selected">购物车</NavItemLink>
                <NavItemLink to="/user" activeClassName="selected">我的</NavItemLink>
        </div>)
    }
}

export default Cart;
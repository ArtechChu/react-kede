import React, { Component } from 'react'
import { NavItemLink } from '../Cart/style';

class User extends Component {
    render() {
        return (<div style={{ height: "600px", margin: "50% auto" }}>
            这里是"我的"
        <br />
            <NavItemLink to="/cart" activeClassName="selected">购物车</NavItemLink>
            <NavItemLink to="/user" activeClassName="selected">我的</NavItemLink>
        </div>);
    }
}

export default User;
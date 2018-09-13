import React, { Component } from 'react';
import {
    BottomWrapper,
    ItemWrapper,
    Item,
    ItemLink
} from './style';
class Bottom extends Component {
    render() {
        return (<BottomWrapper className="foot-menu">
            <ItemWrapper >
                <Item className="foot-item"><ItemLink to="/">首页</ItemLink></Item>
                <Item className="foot-item"><ItemLink to="/duwu" className="dw">毒物</ItemLink></Item>
                <Item className="foot-item"><ItemLink to="/cart" className="cart">购物车</ItemLink></Item>
                <Item className="foot-item"><ItemLink to="/user" className="mine">我的</ItemLink></Item>
            </ItemWrapper>
        </BottomWrapper>)
    }
}


export default Bottom;
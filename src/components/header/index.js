import React, { Component } from 'react';
import {
    HeaderWrapper,
    Mask,
    ClassMenuLink,
    ClassMenuImg,
    SearchBar,
    SearchInput
} from './style';
class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Mask />
                <ClassMenuLink>
                    <ClassMenuImg />
                </ClassMenuLink>
                <SearchBar>
                    <SearchInput className="hd_search head_icon"></SearchInput>
                </SearchBar>
            </HeaderWrapper>
        )
    }
}


export default Header;
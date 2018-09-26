import React, { Component } from 'react';
import {connect} from 'react-redux';
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

const mapStateToProps = (state) => {
    console.log(state);
    return {
      isShowHeader: state.showHeader,
      isShowFooter: state.showFooter,
    }
  }
export default connect(mapStateToProps,null)(Header);
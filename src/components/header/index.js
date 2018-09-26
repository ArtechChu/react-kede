import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

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
        let { isShowHeader } = this.props;
        if (isShowHeader) {
            return (
                <HeaderWrapper>
                    <Mask />
                    <ClassMenuLink>
                        <ClassMenuImg />
                    </ClassMenuLink>
                    <SearchBar>
                        <SearchInput className="hd_search head_icon"></SearchInput>
                    </SearchBar>
                    <input type="button" value="隐藏header" onClick={() => this.props.toggleHeader(false)} />;
                </HeaderWrapper>
            )
        }
        else {
            return <input onClick={() => this.props.toggleHeader(true)} type="button" value="显示header" />;
        }
    }

}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        isShowHeader: state.header.get("showHeader"),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleHeader(status) {
            status
                ? dispatch(actionCreators.ShowHeader())
                : dispatch(actionCreators.HideHeader());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
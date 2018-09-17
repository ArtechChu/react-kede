import React, { Component } from 'react'
import {
    SearchWrapper,
    SearchHeader
} from './style';
class Search extends Component {
    render() {
        return (
            <SearchWrapper>
                <SearchHeader>
                    search header content
                </SearchHeader>
                search content
            </SearchWrapper>
        );
    }
}

export default Search;
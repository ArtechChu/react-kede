import styled from 'styled-components';

export const SearchWrapper = styled.div`
    &.viewport{
        max-width: 750px;
        min-width: 320px;
        margin: 0 auto;
        padding-top: 45px;
        overflow: hidden;
        position: relative;
        padding-bottom: 80px;
    }
`;

export const SearchHeader = styled.header`
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    -webkit-text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    &.header{
        width: 100%;
        max-width: 750px;
        min-width: 320px;
        height: 45px;
        z-index: 11;
        top: 0px;
        position: fixed;
    }
`;
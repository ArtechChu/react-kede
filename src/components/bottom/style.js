import styled from 'styled-components';
import footerNavImg from '../../assets/img/footer_nav.png';
import { Link } from 'react-router-dom';

export const BottomWrapper = styled.div`
    &.foot-menu{
        background: #ffffff;
        border-top: 1px solid #ccc;
        height: 55px;
        position: fixed;
        bottom: 0;
        max-width: 750px;
        min-width: 320px;
        width: 100%;
        font-size: 0;
        z-index: 11;
        transform: translateX(-50%);
        left: 50%;
    }
`;

export const ItemWrapper = styled.ul`
    list-style:none;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    -webkit-text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    overflow:hidden;
`;

export const Item = styled.li`
    &.foot-item{
        width: 25%;
        display: inline-block;
        position: relative;
        float: left;
    }
    /* &.selected{
        color: #8ec31e;
    } */
`;

export const ItemLink = styled(Link).attrs({
    to: props => props.to
})`
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
    font-size: 14px;
    padding: 31px 0 3px;

    text-decoration: none;
    cursor: pointer;
    color: #888;
    -webkit-tap-highlight-color: rgba(255,255,255,0);

    &::after{
        content: "";
        background: url(${footerNavImg});
        background-size: 20px auto;
        width: 20px;
        height: 20px;
        display: block;
        position: absolute;
        top: 6px;
        left: 50%;
        margin-left: -10px;
    }
    &.dw::after{
        background-position: 0 -100px;
    };
    &.cart::after{
        background-position: 0 -120px;
    };
    &.mine::after{
        background-position: 0 -140px;
    };
`;
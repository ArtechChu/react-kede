import styled from 'styled-components';


export const HeaderWrapper = styled.div`
    width: 100%;
    max-width: 750px;
    min-width: 320px;
    height: 45px;
    z-index: 11;
    top: 0;
    position: fixed;
`

export const Mask = styled.div`
    width: 100%;
    height: 45px;
    position: absolute;
    background: #141414;
    opacity: .8;
    top: 0;
    left: 0;
    z-index: 0;
`

export const ClassMenuLink = styled.a`
    position: absolute;
    top: 50%;
    left: 10px;
    width: 31px;
    margin-top: -16px;
    display: block;
`

export const ClassMenuImg = styled.img.attrs({
    src: 'https://pic.keede.com//app/images/Community/Index/classmenu.png'
})`
    width: 31px;
    height:31px;
    display:inline-block;
    vertical-align: middle;
`

export const SearchBar = styled.div`
    background-size: 21px auto;
    background-position: 12px -47px;
    background-color: #fff;
    background-repeat: no-repeat;
    width: 60%;
    height: 27px;
    margin: 9px auto;
    position: relative;
    border-radius: 15px;
`

export const SearchInput = styled.input.attrs({
    placeholder:"请输入您要搜索的内容"
})`
    display: inline;
    height: 27px;
    line-height: initial;
    width: 100%;
    border: none;
    background: none;
    font-size: 14px;
    &.head_icon {
        background-image: url(https://pic.keede.com/Images/2016app/icon_head.png);
    }
    &.hd_search{
        background-size: 21px auto;
        background-position: 12px -47px;
        background-color: #fff;
        background-repeat: no-repeat;
        height: 27px;
        padding: 0 24px 0 42px;
        position: relative;
        border-radius: 15px;
    }
`



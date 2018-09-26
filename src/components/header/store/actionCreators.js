import {SHOW_HEADER, HIDE_HEADER} from './actionTypes';

const getShowHeaderAction = ()=>{
    return {
        type:SHOW_HEADER
    }
}

const getHideHeaderAction = ()=>{
    return {
        type:HIDE_HEADER
    }
}


export const ShowHeader = ()=>{
    return (dispatch)=>{
        let action = getShowHeaderAction();
        dispatch(action);
    }
}

export const HideHeader = ()=>{
    console.log("hide")

    return (dispatch)=> {
        let action = getHideHeaderAction();
        dispatch(action);
    }
}

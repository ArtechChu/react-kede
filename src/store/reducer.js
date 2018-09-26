import {fromJS} from 'immutable';
// const defaultState = fromJS({
//     showHeader:true,
//     showFooter:true
// });

const defaultState = {
    showHeader:true,
    showFooter:true
}

export default (state = defaultState, action)=>{
    state.showHeader = true;
    return state;
}
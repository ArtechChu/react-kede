import { fromJS } from 'immutable';
import { SHOW_HEADER, HIDE_HEADER } from './actionTypes';


const defaultState = fromJS({
    showHeader: false
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case SHOW_HEADER:
            return state.set("showHeader",true);
        case HIDE_HEADER:
            return state.set("showHeader",false);
        default:
            return state;
    }
}


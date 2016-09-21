"use strict";

import {dispatch} from "../store";
import {FIELD, REQUEST, LOAD, ERROR} from "../const";

export const request = ( options, isStatic = false)=> {
    if (isStatic) {
        dispatch({type: LOAD, ...options})
    } else {
        if (options.pathname)
            dispatch({type: REQUEST, ...options})
        else
            throw  'url not default...'
    }
}


export default {
    [FIELD]: (state = {}, action) => {
        const {type, ...params} = action;
        switch (type) {
            case REQUEST:
            case LOAD:
            case ERROR:
                return {status: type, ...params}
            default:
                return state;
        }
    }
}
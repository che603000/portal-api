"use strict";

import {store} from "../../../store";
import {FIELD, REQUEST, LOAD, ERROR, REFRESH} from "./const";

export const request = (options, isStatic = false)=> {
    if (isStatic) {
        store.dispatch({type: LOAD, ...options})
    } else {
        if (options.pathname)
            store.dispatch({type: REQUEST, ...options})
        else
            throw  'url not default...'
    }
}

export const refresh = (options)=> {
    store.dispatch({type: REFRESH})
}

export default {
    [FIELD]: (state = {}, action) => {
        const {type, ...params} = action;
        switch (type) {
            case REQUEST:
            case LOAD:
            case ERROR:
                //params.callback && setTimeout(params.callback);
                return {status: type, ...params}
            case REFRESH:
                const {url, mode} = state;
                request({url, mode})
                return state;
            default:
                return state;
        }
    }
}
"use strict";

import {store} from "../../../store";
import {FIELD, REQUEST, LOAD, ERROR, REFRESH} from "./const";

export const request = (options)=> {
    if (options.url)
        store.dispatch({type: REQUEST, ...options})
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
"use strict";

import {REQUEST, LOAD, ERROR} from './const'

export default {
    content: (state = {}, action) => {
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
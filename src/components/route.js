/**
 * Created by Александр on 10.09.2016.
 */

import React from "react";
import {Route as BaseRoute} from "react-router";
import store, {addReducer} from "../store";

export const REQUEST = '@@content/REQUEST'
export const LOAD = '@@content/LOAD'
export const ERROR = '@@content/ERROR'


export default class extends BaseRoute {
    static get defaultProps() {
        return {
            onEnter: function (nextState, replace) {
                const {url, mode = 'text'} =this;
                store.dispatch({type: REQUEST, url, mode})
            }
        }
    }

    static reducer = {
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
}

//debugger;
addReducer(store);

//export default AppRoute;
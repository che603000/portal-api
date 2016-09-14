"use strict";

//import React from "react";
import {Route} from "react-router";

import {REQUEST, LOAD, ERROR} from './const'
import {store} from '../../store'

export default  class extends Route {
    static get defaultProps() {
        return {
            onEnter: function (nextState, replace) {
                const {url, mode = 'text'} =this;
                store.dispatch({type: REQUEST, url, mode})
            }
        }
    }
}

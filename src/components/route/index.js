"use strict";

import React from "react";
import {Route} from "react-router";
import Component from "./component";
import {request} from "../../reducers/content";


export default  class extends Route {
    static get defaultProps() {
        return {
            component: Component,
            mode: 'text',
            isStatic: false,
            onEnter: function ({location:{pathname}}, replace) {
                const {mode, isStatic} = this;
                request({pathname, mode}, isStatic);
            }
        }
    }

}

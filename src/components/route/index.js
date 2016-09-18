"use strict";

import {Route} from "react-router";
import {request} from "../../reducers/content";
import Component from "./component";

export default  class extends Route {
    static get defaultProps() {
        return {
            component: Component,
            onEnter: function (nextState, replace) {
                const {mode = 'text', isStatic = false} =this,
                    {location} =nextState;

                request({pathname: location.pathname, mode}, isStatic);
            }
        }
    }
}

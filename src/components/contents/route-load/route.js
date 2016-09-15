"use strict";

import {Route} from "react-router";
import {request} from "./reducer";


export default  class extends Route {
    static get defaultProps() {
        return {
            onEnter: function (nextState, replace) {
                const {url : tempUrl, mode = 'text'} =this,
                    {params, location} =nextState;
                let url;
                if(tempUrl)
                    url = ~tempUrl.indexOf(':')
                        ?
                        Object.keys(params).reduce((res, key)=>res.replace(RegExp(`:${key}`, 'gi'), params[key]), tempUrl)
                        :
                        tempUrl;
                else
                    url = `/api/${location.pathname}`
                request({url, mode})
            }
        }
    }
}

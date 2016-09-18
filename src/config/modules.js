/**
 * Created by alex on 14.09.2016.
 */
import reducers from '../reducers'
import middlewares from '../middlewares'

import {initialize} from "../plugins";

module.exports = {
    modules: initialize,
    get reducers() {
        const pluginReducers = this.modules
            .filter(module=>module.reducer)
            .reduce((res, module)=> {
                return {...res, ...module.reducer}
            }, {});

        return {...reducers, ...pluginReducers}
    },

    get middlewares() {
        const pluginMiddlewares = this.modules
            .filter(module=>module.middleware)
            .map(module=> module.middleware)

        return middlewares.concat(pluginMiddlewares);
    }
}

/**
 * Created by alex on 14.09.2016.
 */

import {initialize} from "../components";
import {initialize as plugins} from "../plugins";

module.exports = {
    modules: initialize.concat(plugins),
    get reducers() {
        return this.modules
            .filter(module=>module.reducer)
            .reduce((res, module)=> {
                return {...res, ...module.reducer}
            }, {})
    },
    // get components() {
    //     return this.modules
    //         .filter(module=>module.default)
    //         .reduce((res, module)=>(
    //             {...res, [module.id]: module.default}), {}
    //         )
    // },
    get middlewares() {
        return this.modules
            .filter(module=>module.middleware)
            .map(module=> module.middleware)
    }
}

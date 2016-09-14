/**
 * Created by alex on 14.09.2016.
 */

module.exports = {
    modules: require("../modules"),
    get reducers() {
        return this.modules
            .filter(module=>module.reducer)
            .reduce((res, module)=> {
                return {...res, ...module.reducer}
            }, {})
    },
    get components() {
        return this.modules
            .filter(module=>module.default)
            .reduce((res, module)=>(
                {...res, [module.id]: module.default}), {}
            )
    },
    get middlewares() {
        return this.modules
            .filter(module=>module.middleware)
            .map(module=> module.middleware)
    }
}

/**
 * Created by alex on 06.09.2016.
 */

import {createStore, combineReducers, applyMiddleware} from "redux";
let _store = null;

module.exports = {
    get store() {
        return _store;
    },
    create(reducers, middlewares = [], initState){
        _store = createStore(
            combineReducers({...reducers}),
            applyMiddleware.apply(null, middlewares),
            initState
        )
        return _store;
    }
}







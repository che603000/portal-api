/**
 * Created by alex on 06.09.2016.
 */

import {createStore, combineReducers, applyMiddleware} from "redux";

let _store;

export default (reducers, middlewares = [], initState)=> {
    return _store = createStore(
        combineReducers({...reducers}),
        applyMiddleware.apply(null, middlewares),
        initState
    )
}

export function dispatch(action) {
    return _store.dispatch(action);
}


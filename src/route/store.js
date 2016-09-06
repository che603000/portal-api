/**
 * Created by alex on 06.09.2016.
 */
import {createStore, combineReducers, applyMiddleware} from "redux";
import {routerReducer} from "react-router-redux";

let _store = null;

const logger = ({getState}) => {
    return (next) => (action) => {
        console.log('dispatch:', action)

        // Call the next dispatch method in the middleware chain.
        let returnValue = next(action)

        console.log('state:', getState())

        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return returnValue
    }
}
const create = (reducers = {}, middlewares = [])=> {
    reducers.routing = routerReducer;
    _store = createStore(
        combineReducers(reducers),
        applyMiddleware.apply(null, middlewares.concat(logger))
    )

    return _store;
}

export  { _store as store, create as createStore}


/**
 * Created by alex on 06.09.2016.
 */
import {createStore, combineReducers, applyMiddleware} from "redux";
import {routerReducer} from "react-router-redux";
import middlewares from "./middlewares";


function createReducer(asyncReducers) {
    return combineReducers({
        routing: routerReducer,
        ...asyncReducers
    });
}

export default createStore(
    createReducer(),
    applyMiddleware.apply(null, middlewares)
);

//store.syncReducers = {};


export function addReducer(store, reducer) {
    //console.log(reducer);
    console.log(store);
    // if (reducer)
    //     store.syncReducers = {...store.syncReducers, ...reducer};
    // console.log(store.syncReducers);
}







/**
 * Created by alex on 06.09.2016.
 */
import {createStore, combineReducers, applyMiddleware} from "redux";
import {routerReducer} from "react-router-redux";
import middlewares from "./middlewares";

let store = null,
    reducers = {routing: routerReducer};

const addReducer = ({reducer})=> {
    if (reducer)
        reducers = {...reducers, ...reducer};
}

const create = ()=> {

    store = createStore(
        combineReducers(reducers),
        applyMiddleware.apply(null, middlewares)
    )

    return store;
}

export  {store, create as createStore, addReducer}


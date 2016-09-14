/**
 * Created by alex on 06.09.2016.
 */
import {createStore, combineReducers, applyMiddleware} from "redux";
import {routerReducer} from "react-router-redux";
import systemMiddlewares from "./middlewares";

const systemReducers ={
    routing: routerReducer
}

let _store= null;

module.exports = {
    get store() {
        return _store;
    },
    create(reducers, middlewares=[], initState){
         _store = createStore(
            combineReducers({
                ...systemReducers,
                ...reducers
            }),
            applyMiddleware.apply(null, middlewares.concat(systemMiddlewares)),
            initState
        )
        return _store;
    }
}







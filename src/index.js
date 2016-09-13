/**
 * Created by alex on 17.08.2016.
 */

import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";

import store from "./store";

console.log(store);


//const store = createStore();
const history = syncHistoryWithStore(browserHistory, store)

import {routes} from './config'

//createReducer();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>,
    document.getElementById('container')
)

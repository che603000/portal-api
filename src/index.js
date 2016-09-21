/**
 * Created by alex on 17.08.2016.
 */

import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import {routes, reducers, middlewares} from "./config";
import createStore from "./store";
import $ from "jquery";

const store = createStore(reducers, middlewares)
const ROOT_NODE = document.getElementById('portal');
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>,
    ROOT_NODE
)


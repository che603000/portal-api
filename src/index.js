/**
 * Created by alex on 17.08.2016.
 */

import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";

import Site from "./site";
import * as content from "./components/Content";
import {createStore, addReducer} from "./store";

addReducer(content, {reducer:{test:(state)=>state}});

const store = createStore();
const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render(
    <Provider store={store}>
        { /* Tell the Router to use our enhanced history 333*/ }
        <Router history={history}>
            <Route path="/" component={Site}>
                {/*<IndexRedirect to='home' /> /!* INDEX REDIRECT *!/*/}
                {/*<IndexRoute component={Home}/>*/}
                <content.Route path="home" url="/api/page1"/>
                {/*/!*{contentRoute(store, {path: 'home', url: "/api/page1"})}*!/*/}
                {/*<Route path="foo" component={Foo}>*/}
                {/*<Route path=":index" component={Foo}/>*/}
                {/*</Route>*/}
                <content.Route path="bar" url="/api/page2">
                    <content.Route path=":index" url="/api/page3" mode="json"/>
                </content.Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('container')
)

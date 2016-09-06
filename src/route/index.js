/**
 * Created by alex on 05.09.2016.
 */

import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import {App, Foo} from "./components";
import {contentReducer, ContentRoute} from "./components/Content";
import loader from "./reducers/loader";
import {createStore} from "./store";

const store = createStore({content: contentReducer}, [loader]);


// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render(
    <Provider store={store}>
        { /* Tell the Router to use our enhanced history 333*/ }
        <Router history={history}>
            <Route path="/" component={App}>
                {/*<IndexRedirect to='home' /> /!* INDEX REDIRECT *!/*/}
                {/*<IndexRoute component={Home}/>*/}
                <ContentRoute path="home" url="/api/page1"/>
                {/*{contentRoute(store, {path: 'home', url: "/api/page1"})}*/}
                <Route path="foo" component={Foo}>
                    <Route path=":index" component={Foo}/>
                </Route>
                <ContentRoute path="bar" url="/api/page2">
                    <ContentRoute path=":index" url="/api/page3" mode="json"/>
                </ContentRoute>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
)
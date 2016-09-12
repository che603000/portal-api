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
import * as baseContent from './components/contents/base';
import {createStore, addReducer} from "./store";


class R extends Route {
    static get defaultProps() {
        return {
            component: ()=><div>Test</div>,
            onEnter: function (nextState, replace, cb) {
                const {path, url} = this;
                store.dispatch({type: 'request', path, url});
            }
        }
    }

    constructor(props) {
        console.log("R", props);
        super(props);
    }
}

addReducer(content, {reducer: {test: (state)=>state}});

const store = createStore();
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        { /* Tell the Router to use our enhanced history 333*/ }
        <Router history={history}>
            <Route path="/" component={Site}>
                <baseContent.Route path="test" url="/api/page1"
                                   cache={true} View={props=><h1>{props.data}</h1>}/>

                <baseContent.Route path="home" url="/api/page20"
                                   cache={false} View={props=><h1>{props.data}</h1>}/>
                {/*<IndexRedirect to='home' /> /!* INDEX REDIRECT *!/*/}
                {/*<IndexRoute component={Home}/>*/}
                {/*<content.Route path="home" url="/api/page1"/>*/}
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

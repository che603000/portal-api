/**
 * Created by alex on 05.09.2016.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers , applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, IndexRedirect,  browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import  {App, Foo, Home} from './components'


import {Content, contentReducer} from './components/Bar'

import loader from  './reducers/loader'

// Add the reducer to your store on the `routing` key
const store = createStore(
    combineReducers({
        content: contentReducer,
        routing: routerReducer
    }),
    applyMiddleware(loader)
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

store.subscribe(e=>{
    console.log(store.getState());
})

ReactDOM.render(
    <Provider store={store}>
        { /* Tell the Router to use our enhanced history 333*/ }
        <Router history={history}>
            <Route path="/" component={App}>
                {/*<IndexRedirect to='home' /> /!* INDEX REDIRECT *!/*/}
                {/*<IndexRoute component={Home}/>*/}
                <Route path="home" component={Home}/>
                <Route path="foo" component={Foo}>
                    <Route path=":index" component={Foo}/>
                </Route>
                <Route path="bar" component={Content}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
)
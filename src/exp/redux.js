/**
 * Created by alex on 18.08.2016.
 */

import {createStore, combineReducers, applyMiddleware} from "redux";

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}

function list(state = [], action) {
    switch (action.type) {
        case 'ADD':
            return state.concat(action.data);
        case 'REMOVE':
            const l = [].concat(state)
            l.splice(action.index, 1);
            return l;
        default:
            return state
    }
}

function load(state = [], action) {
    switch (action.type) {
        case 'LOADING':
            return {status: 'loading'}
        case 'LOADED':
            return {
                status: 'loaded',
                res: action.res
            }
        case 'ERROR':
            return {
                status: 'errpr',
                err: action.err
            }
        default:
            return state
    }
}


function logger({getState}) {
    return (next) => (action) => {
        console.log('will dispatch', action)

        // Call the next dispatch method in the middleware chain.
        let returnValue = next(action)

        console.log('state after dispatch', getState())
        console.log("---------");

        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return returnValue
    }
}


function loader({getState}) {
    return (next) => (action) => {

        switch (action.type) {
            case 'LOADING':
                window.fetch(`/users`)
                    .then(res=> {
                        if (res.ok)
                            res.text().then(text=> {
                                store.dispatch({type: 'LOADED', res})
                            })

                    })
                    .catch(err=> {
                        store.dispatch({type: 'ERROR', err})
                    })

        }

        return next(action);
    }
}


// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(combineReducers({
        counter,
        list,
        load
    }),

    applyMiddleware(loader, logger))

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

// store.subscribe(() =>
//
//     console.log(store.getState())
// )

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({type: 'INCREMENT'})
// 1
store.dispatch({type: 'INCREMENT'})
// 2
store.dispatch({type: 'DECREMENT'})
// 1
store.dispatch({type: 'ADD', data: {id: 90, name: 'test'}})
store.dispatch({type: 'ADD', data: {id: 1, name: 'name'}})

store.dispatch({type: 'REMOVE', index: 0})

store.dispatch({type: 'LOADING', id: 90})
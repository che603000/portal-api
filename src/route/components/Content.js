/**
 * Created by alex on 05.09.2016.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {Route} from "react-router";
import {store} from "../store";

@connect(state => ({
    content: state.content
}))
export class Content1 extends Component {
    render() {
        return (
            <div>
                content 1
                {this.props.children}
            </div>
        )
    }
}


@connect(state => ({
    content: state.content
}))
export class Content extends Component {
    static get defaultProps() {
        return {}
    }

    get content() {
        return this.props.content[this.props.route.url];
    }

    render() {

        const {status, data, error, mode} = this.content;


        switch (status) {
            case 'loaded':
                return <div>{ mode === 'json' ? data.text : data}{this.props.children}</div>
            case 'error':
                return <div className="alert alert-danger">{error.statusText}</div>
            default:
                return <div>Ждите</div>
        }
    }

}

export const contentReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                [action.url]: {
                    status: action.type.toLowerCase(),
                    url: action.url,
                    mode: action.mode
                },

            }
        case 'LOADED':
            return {
                ...state,
                [action.url]: {
                    ...state[action.url],
                    status: action.type.toLowerCase(),
                    data: action.data
                }
            }
        case 'ERROR':
            return {
                ...state,
                [action.url]: {
                    ...state[action.url],
                    status: action.type.toLowerCase(),
                    error: action.err
                }
            }
        default:
            return state
    }
}

export class ContentRoute extends Route {

    static get defaultProps() {
        return {
            component: Content,
            onEnter: function (nextState, replace) {
                store.dispatch({
                    type: "LOADING",
                    url: this.url,
                    mode: this.mode || 'text'
                })
            }
        }
    }

}


export const contentRoute = (store, props)=> {
    return <Route {...props} component={Content} onEnter={Content.onEnter(store)}/>

}



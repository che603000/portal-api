/**
 * Created by alex on 05.09.2016.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {Route as BaseRoute} from "react-router";
import {request, LOADED, LOADING, ERROR} from '../middlewares/loader'

@connect(state => ({
    content: state.content
}))
class Content extends Component {
    static get defaultProps() {
        return {}
    }

    get content() {
        return this.props.content[this.props.route.url];
    }

    render() {
        const {status, data, error, mode} = this.content;
        switch (status) {
            case LOADED:
                return <div>{ mode === 'json' ? data.text : data}{this.props.children}</div>
            case ERROR:
                return <div className="alert alert-danger">{error.statusText}</div>
            default:
                return <div>Ждите...</div>
        }
    }

}

export const reducer = {
    content: (state = {}, action) => {
        switch (action.type) {
            case LOADING:
                return {
                    ...state,
                    [action.url]: {
                        status: action.type,
                        url: action.url,
                        mode: action.mode
                    },

                }
            case LOADED:
                return {
                    ...state,
                    [action.url]: {
                        ...state[action.url],
                        status: action.type,
                        data: action.data
                    }
                }
            case ERROR:
                return {
                    ...state,
                    [action.url]: {
                        ...state[action.url],
                        status: action.type,
                        error: action.err
                    }
                }
            default:
                return state
        }
    }
}

export class Route extends BaseRoute {

    static get defaultProps() {
        return {
            component: Content,
            onEnter: function (nextState, replace) {
                request({
                    url: this.url,
                    mode: this.mode || 'text'
                })
            }
        }
    }

}




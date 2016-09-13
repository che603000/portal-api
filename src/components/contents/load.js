/**
 * Created by Александр on 10.09.2016.
 */

import React, {Component} from "react";
import {connect} from "react-redux";
import BaseRoute, {REQUEST, ERROR, LOAD} from "../route";

@connect(state => ({
    content: state.content
}))
class Content extends Component {
    static get defaultProps() {
        return {
            View: (props)=><div>{props.data}</div>,
            Error: (props)=> <div className="alert alert-danger">{props.error.status} -- {props.error.statusText}</div>,
            Request: (props)=><div>Ждите</div>,
            content: {}
        }
    }

    static get defaultState() {
        return {
            status: REQUEST,
            error: null,
            data: null
        }
    }

    get View() {
        return this.props.route.View || this.props.View;
    }

    get Error() {
        return this.props.route.Error || this.props.Error;
    }

    get Request() {
        return this.props.route.Request || this.props.Request;
    }


    render() {
        const {status, data, error, mode = 'text'} = this.props.content;
        switch (status) {
            case LOAD:
                return (
                    <div>
                        <this.View data={data}/>
                        {this.props.children}
                    </div>
                )
            case ERROR:
                return <this.Error error={error}/>
            default:
                return <this.Request/>
        }
    }

}

export default class Route extends BaseRoute {
    static get defaultProps() {
        return {
            ...BaseRoute.defaultProps,
            component: Content,
        }
    }
}

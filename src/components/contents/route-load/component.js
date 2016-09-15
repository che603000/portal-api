"use strict";

import React from "react";
import {connect} from "react-redux";

import {FIELD, REQUEST, LOAD, ERROR} from './const'

@connect(state => ({
    [FIELD]: state[FIELD]
}))
export default class  extends React.Component {
    static get defaultProps() {
        return {
            View: (props)=><div>{props.data}</div>,
            Error: (props)=> <div className="alert alert-danger">{props.error.status} -- {props.error.statusText}</div>,
            Request: (props)=><div>Ждите</div>,
            [FIELD]: {}
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
        const {status, data, error, mode = 'text'} = this.props[FIELD];
        const {params, route} = this.props;
        switch (status) {
            case LOAD:
                return (
                        <div>
                            <this.View params={params} route={route} data={data} />
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


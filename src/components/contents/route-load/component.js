"use strict";

import React from "react";
import {connect} from "react-redux";
import {FIELD, LOAD, ERROR, REQUEST} from "./const";

@connect(state => ({
    [FIELD]: state[FIELD]
}))
export default class  extends React.Component {
    static get defaultProps() {
        return {
            View: (props)=><div>{props.data}</div>,
            Error: (props)=> <div className="alert alert-danger">{props.error.status} -- {props.error.statusText}</div>,
            Request: (props)=><div>{props.text || 'Loading...'}</div>,
            [FIELD]: {}
        }
    }

    content = null;

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
        const {status, data, error, mode = 'text', pathname} = this.props[FIELD];
        const {params, route, location} = this.props;

        switch (status) {
            case  REQUEST:
                return this._renderWait();
            case LOAD:
                if (location.pathname === pathname)
                    this.content = this._renderView(data, params, route);
                return this.content;
            case ERROR:
                return <this.Error error={error}/>
            default:
                throw 'Not know status...'
        }
    }

    _renderView(data, params, route) {
        return (
            <div>
                <this.View params={params} route={route} data={data}/>
                {this.props.children}
            </div>
        )
    }

    _renderWait() {
        if (this.content)
            return (
                <div className="app-content-wait">
                    {this.content}
                </div>
            )
        else
            return <this.Request />
    }

}


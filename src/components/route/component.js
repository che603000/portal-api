"use strict";

import React from "react";
import {connect} from "react-redux";
import {FIELD, LOAD, ERROR, REQUEST} from "../../const";

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

    get View() {
        return this.props.route.View || this.props.View;
    }

    get Error() {
        return this.props.route.Error || this.props.Error;
    }

    get Request() {
        return this.props.route.Request || this.props.Request;
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Перерисовать элемент, только если путь запроса совпадает с путем для компонента и это не запрос
        // в противном случае render не вызывать
        const {status, pathname} = nextProps[FIELD];
        return (nextProps.location.pathname === pathname) && (status !== REQUEST);
    }

    render() {
        const {status, data, error} = this.props[FIELD];
        const {params, route} = this.props;

        switch (status) {
            case LOAD:
                return (
                    <div>
                        <this.View params={params} route={route} data={data}/>
                        {this.props.children}
                    </div>
                )
            case ERROR:
                return <this.Error error={error}/>
            default:
                return <this.Request />
        }
    }
}


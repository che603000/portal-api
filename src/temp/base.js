/**
 * Created by Александр on 10.09.2016.
 */

import React, {Component} from "react";
//import {connect} from "react-redux";
import {Route as BaseRoute} from "react-router";
import {get} from '../../utils/loader'
export const STATUS = {LOADING: 'loading', LOADED: 'loaded', ERROR: 'error'};

export class BaseContent extends Component {
    static get defaultProps() {
        return {
            View: (props)=><div>{props.data}</div>,
            Error: (props)=> <div className="alert alert-danger">{props.error.status} -- {props.error.statusText}</div>,
            Request: (props)=><div>Ждите</div>,
        }
    }

    static get defaultState() {
        return {
            status: STATUS.LOADING,
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

    constructor(props) {
        super(props);
        this.state = BaseContent.defaultState;
    }

    componentDidMount() {
        this.load(this.props.route.url);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(BaseContent.defaultState);
        this.load(nextProps.route.url);
    }

    load(url) {
        get(url, (error, data)=> {
            if (error)
                this.setState({status: STATUS.ERROR, error});
            else
                this.setState({status: STATUS.LOADED, data});
        })
    }

    render() {
        const {status, data, error, mode} = this.state;
        switch (status) {
            case STATUS.LOADED:
                return (
                    <div>
                        <this.View data={data}/>
                        {this.props.children}
                    </div>
                )
            case STATUS.ERROR:
                return <this.Error error={error}/>
            default:
                return <this.Request/>
        }
    }

}

export class Route extends BaseRoute {
    static get defaultProps() {
        return {
            component: BaseContent,
            onEnter: function (nextState, replace) {
            }
        }
    }

}

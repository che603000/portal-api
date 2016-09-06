/**
 * Created by alex on 05.09.2016.
 */
import React, {Component} from "react";
import {connect} from "react-redux";


@connect(state => ({
    content: state.content
}))
export class Content extends Component {
    static get defaultProps() {
        return {}
    }

    componentWillMount(nextProps, nextState) {
        //debugger;
        this.props.dispatch({
            type: "LOADING",
            url: this.props.route.url
        })
    }

    componentWillReceiveProps(nextProps) {
        const {content} = this.props;
        if (content.status === 'loaded')
            this.props.dispatch({
                type: "LOADING",
                url: this.props.route.url
            })
    }

    render() {
        const {content} = this.props;
        switch (content.status) {
            case 'loaded':
                return <div>{content.text}</div>
            case 'error':
                return <div className="alert alert-danger">{content.error.statusText}</div>
            default:
                return <div>Ждите</div>
        }
    }

    componentWillUnmount() {
        console.log("unmount");
    }
}

export const contentReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOADING':
            return {status: 'loading'}
        case 'LOADED':
            return {
                status: 'loaded',
                text: action.text
            }
        case 'ERROR':
            return {
                status: 'error',
                error: action.err
            }
        default:
            return state
    }
}


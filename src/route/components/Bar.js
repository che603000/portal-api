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
        this.props.dispatch({type: "LOADING"})
    }

    render() {
        const {content} = this.props;
        switch (content.status) {
            case 'loaded':
                return <div>{content.text}</div>
            default:
                return <div>Ждите</div>
        }


    }
}

export function contentReducer(state = {}, action) {
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
                status: 'errpr',
                err: action.err
            }
        default:
            return state
    }
}


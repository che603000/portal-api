/**
 * Created by alex on 13.09.2016.
 */
import React from "react";
import {store} from "../../store";
import {connect} from "react-redux";

export const CLICK = '@@header/CLICK'

@connect(state => ({
    header: state.header
}))
class Button extends React.Component {

    static get defaultProps() {
        return {
            className: 'btn btn-default',
            header: {id: null}
        }
    }

    get classIcon() {
        return `glyphicon glyphicon-${this.props.icon}`;
    }

    get isActive() {
        return this.props.id === this.props.header.id;
    }

    get className() {
        return `${this.props.className} ${this.isActive ? 'btn-primary' : ''}`
    }

    onClick(e) {
        store.dispatch({type: CLICK, id: this.isActive ? null : this.props.id});
    }

    render() {
        return (
            <button className={this.className} onClick={::this.onClick}>
                <span className={this.classIcon}></span>
            </button>
        )
    }

    static reducer = {
        header: (state = {}, action) => {
            const {type, ...params} = action;
            switch (type) {
                case CLICK:
                    return {...params}
                default:
                    return state;
            }
        }
    }
}

// import app from '../app'
//
// app.reducers = {...app.reducers, ...Button.reducer}

export default Button;
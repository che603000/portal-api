/**
 * Created by alex on 14.09.2016.
 */

import React from "react";
import {connect} from "react-redux";
import {store} from '../../../store'
import {CLICK, FIELD} from './const'

@connect(state => ({
    [FIELD]: state[FIELD]
}))
export default class extends React.Component {

    static get defaultProps() {
        return {
            className: 'btn btn-default',
            [FIELD]: {id: null}
        }
    }

    get classIcon() {
        return `glyphicon glyphicon-${this.props.icon}`;
    }

    get isActive() {
        return this.props.id === this.props[FIELD].id;
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


}


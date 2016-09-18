/**
 * Created by alex on 14.09.2016.
 */

import React from "react";
import ReactDOM from 'react-dom'
import {connect} from "react-redux";
import {store} from '../../store'
import {CLICK, FIELD_TOOLBOX as FIELD} from '../../const'

@connect(state => ({
    [FIELD]: state[FIELD]
}))
export default class extends React.Component {

    static get defaultProps() {
        return {
            className: 'btn btn-sm',
            [FIELD]: {id: null}
        }
    }

    get isActive() {
        return this.props.id === this.props[FIELD].id;
    }

    get className() {
        return `${this.props.className} ${this.isActive ? 'app-toolbox-active' : ''}`
    }

    __key = null;

    componentDidMount() {
        window.addEventListener('resize', ()=> {
            if (this.isActive) {
                this.__key && clearTimeout(this.__key);
                this.__key = setTimeout(this.onResize, 100)
            }
        })
    }

    onClick = (e) => {
        if (this.isActive)
            store.dispatch({
                type: CLICK,
                id: null
            })
        else
            store.dispatch({
                type: CLICK,
                id: this.props.id,
                popover: this.props.popover,
                position: this.position
            })
    }

    onResize = (e) => {
        store.dispatch({
            type: CLICK,
            id: this.props.id,
            popover: this.props.popover,
            position: this.position
        })
    }

    get position() {
        const {top, left, width, height} = ReactDOM.findDOMNode(this).getBoundingClientRect();
        return {
            top: top + height,
            left: left + (width / 2)
        }
    }

    render() {
        return (
            <li>
                <a className={this.className} onClick={this.onClick}>
                    {this.props.children}
                </a>
            </li>
        )
    }


}

//<a href="#" className="btn btn-sm"><FontIcon icon="plus"/></a>
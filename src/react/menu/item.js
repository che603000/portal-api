/**
 * Created by alex on 19.08.2016.
 */

import React, {Component} from "react";
import {connect} from "react-redux";


@connect(state => ({
    hash: state.hash
}))
export default class Item extends Component {
    static get defaultProps() {
        return {
            href: '#',
            text: 'text',
            isNavigate: false
        }
    }

    get classActive() {
        return this.props.hash === this.props.href ? 'app-menu-active' : '';
    }

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <li><a href={this.props.href} className={this.classActive} onClick={::this.onClick}>{this.props.text}</a>
            </li>
        )
    }

    onClick(e) {
        this.props.isNavigate && e.preventDefault();
        //console.log(this.props.text);
    }
}


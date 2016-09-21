/**
 * Created by Администратор on 06.09.2016.
 */

import React, {Component} from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {COLLAPSE} from "../../const";

@withRouter // подключаем компонент к роутеру
@connect(state=> {
    return {
        navigation: state.navigation,
        routing: state.routing
    }
}) //  подключаем компонент к redux

export default class extends Component {
    componentDidMount() {
        const {to, router} = this.props,
            collapse = !router.isActive(to);
        this.props.dispatch({type: COLLAPSE, pathname: this.props.to, collapse});
    }

    render() {
        const {text, to, navigation:{[to]: collapse}, children} = this.props;
        return (
            <li>
                <a href="#" onClick={this.onClick}>{text}</a>
                <ul className="app-menu-sub" style={{display: collapse ? 'none' : ''}}>{children}</ul>
            </li>
        )
    }

    onClick = (e) => {
        e.preventDefault();
        this.props.dispatch({type: COLLAPSE, pathname: this.props.to})
    }
}

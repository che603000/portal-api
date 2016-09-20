/**
 * Created by Администратор on 06.09.2016.
 */

import React, {Component} from "react";
import {Link, withRouter} from "react-router";

@withRouter // подключаем компонент к роутеру
export default class extends Component {

    state = {collapse: true}

    componentDidMount() {
        const {to, router} = this.props;
        this.setState({collapse: !router.isActive(to)})
    }

    render() {
        const {text, router, children, ...props} = this.props;
        return (
            <li>
                <a href="#" onClick={this.onClick}>{text}</a>
                {this.state.collapse ? null : <ul className="app-menu-sub">{children}</ul>}
            </li>
        )
    }

    onClick = (e) => {
        e.preventDefault();
        this.setState({collapse: !this.state.collapse});
    }
}

/**
 * Created by Администратор on 06.09.2016.
 */

import React, {Component} from "react";
import {Link} from "react-router";

export  default class  extends Component {

    constructor(props) {
        super(props);
        this.state = {collapse: true}
    }

    render() {
        const props = {...this.props},
            {text} = this.props,
            items = this.state.collapse ? null : <ul>{this.props.children}</ul>;

        delete props.text;
        return (
            <li>
                <Link {...props} onClick={::this.onClick}>
                    {text}
                </Link>
                {items}
            </li>
        )
    }

    onClick(e) {
        this.setState({collapse: !this.state.collapse});
        //console.log(this.active);
    }
}

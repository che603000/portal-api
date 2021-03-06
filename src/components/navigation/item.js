import React from "react";
import {Link} from "react-router";


export default class extends Link {

    static get defaultProps() {
        return {
            ...Link.defaultProps,
            activeClassName: 'app-menu-active',
        }
    }

    render() {
        return (
            <li>
                {super.render()}
            </li>
        )
    }
}




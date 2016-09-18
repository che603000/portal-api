/**
 * Created by alex on 05.09.2016.
 */
import React from "react";
import {connect} from "react-redux";

import {FIELD, REQUEST,} from "../const";

@connect(state => ({
    [FIELD]: state[FIELD]
}))
export default class extends React.Component {

    get classNameRequest() {
        return this.props[FIELD].status === REQUEST ? "app-content-request" : "";
    }

    render() {
        return (
            <div id="content" className="col-sm-7 col-sm-offset-3 col-md-8 col-md-offset-2">
                <div className={`"app-content ${this.classNameRequest}`}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}


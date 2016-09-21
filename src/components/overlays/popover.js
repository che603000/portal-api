/**
 * Created by Александр on 17.09.2016.
 */

import React from "react";
import {connect} from "react-redux";

import {HEADER_TOOLBOX as FIELD} from '../../const'

@connect(state => ({
    [FIELD]: state[FIELD]
}))
export default class extends React.Component {
    render() {
        const {position, popover} = this.props[FIELD];
        const component = popover ? popover({position}) : <div/>
        return (
            <div id="popover-overlays">
                {component}
            </div>
        )
    }

}


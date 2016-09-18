/**
 * Created by Александр on 17.09.2016.
 */

import React from "react";
import {connect} from "react-redux";

import {CLICK, FIELD_TOOLBOX as FIELD} from '../../const'

@connect(state => ({
    [FIELD]: state[FIELD]
}))
export default class extends React.Component {
    // static get defaultProps() {
    //     return {
    //         [FIELD]: {
    //             popover: (props)=><div>{props.position}</div>,
    //             position: {}
    //
    //         }
    //     }
    // }

    render() {
        const {position, popover} = this.props[FIELD];
        console.log(this.props[FIELD]);
        const component = popover ? popover({position}) : <div/>
        return (
            <div id="popover-overlays">
                {component}
            </div>
        )
    }

}


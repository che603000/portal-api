/**
 * Created by Александр on 17.09.2016.
 */

import React from 'react'
import {connect} from 'react-redux'
import {HEADER_TOOLBOX_CLICK as CLICK, HEADER_TOOLBOX as FIELD} from '../../const'

@connect(state=>{return {}})
export default  class Popover extends React.Component {
    static get defaultProps() {
        return {
            arrow: 0.5,
            width: 276
        }
    }

    onClick = (e)=> {
        this.props.dispatch({
            type: CLICK,
            id: null
        })
    }

    render() {
        const {position:{top, left}, arrow, title, children, offsetY = 0, offsetX = 0, width} = this.props;
        const style = {
            left: left - (width * arrow) + offsetX,
            top: top + offsetY,
            width,
            maxWidth: width,
            display: 'block'
        }

        return (
            <div className="popover bottom" style={{...this.props.style, ...style}}>
                <div className="arrow" style={{left: `${100 * arrow}%`}}></div>
                <button type="button" className="close" onClick={this.onClick}>&times;</button>
                <h3 className="popover-title">{title}</h3>
                <div className="popover-content">{children}</div>
            </div>
        )

    }
}



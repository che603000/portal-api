/**
 * Created by alex on 19.08.2016.
 */

import  React,  {Component} from 'react'

export default class Items extends Component {
      render() {
        return (
            <ul>{this.props.children}</ul>
        )
    }
}


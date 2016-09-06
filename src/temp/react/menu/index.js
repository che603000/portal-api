/**
 * Created by alex on 19.08.2016.

 */

import './index.css'

import  React, {Component} from "react";
import Items from "./items";
import Item from "./item";

class Menu extends Component {
    render() {
        return (
            <div className="col-md-2">
                <Items>
                    {this.props.items}
                </Items>
            </div>
        )
    }
}

export {Menu, Items, Item}


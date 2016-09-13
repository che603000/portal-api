/**
 * Created by alex on 05.09.2016.
 */
import React from "react";
import {Item, Items} from '../components/menu'


export default ({children}) => {
    return (
        <div id="menu" className="col-md-2">
            <ul>
                {children}
            </ul>
        </div>
    )
}

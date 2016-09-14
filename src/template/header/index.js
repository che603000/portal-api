/**
 * Created by alex on 05.09.2016.
 */

import React, {Component} from "react";
import Logo from './logo'
import Toolbar from './toolbar'

export default ({children}) => {
    return (
        <div id="header" className="row">
            <Logo/>
            <Toolbar>
                {children}
            </Toolbar>
        </div>
    )
}
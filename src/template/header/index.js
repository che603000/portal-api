/**
 * Created by alex on 05.09.2016.
 */

import React, {Component} from "react";
import Logo from './logo'
import Toolbar from './toolbar'


export default ({children}) => {
    return (
        <div className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header col-md-2">
                    <button type="button" className="navbar-toggle">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Logo/>
                </div>
                <div className="navbar-collapse collapse">
                    <Toolbar>
                        {children}
                    </Toolbar>
                </div>
            </div>
        </div>

    )
}

// <div id="header" className="row">
//         <Logo/>
//         <Toolbar>
//             {children}
//         </Toolbar>
//     </div>
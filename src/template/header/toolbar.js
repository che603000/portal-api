/**
 * Created by alex on 05.09.2016.
 */
import React, {Component} from "react";

export default ({children}) => {
    return (
        <div style={{paddingRight: "20px"}}>
            {children}
        </div>
    )
}

/*
 <ul className="nav navbar-nav navbar-left">
 <li className="active"><a href="#" className="btn btn-sm"><FontIcon icon="search"/></a>
 </li>
 <li><a href="#" className="btn btn-sm"><FontIcon icon="plus"/></a></li>
 </ul>
 <ul className="nav navbar-nav navbar-right">
 <li><a href="#" className="btn btn-sm"><FontIcon icon="search"/></a>
 </li>
 <li><a href="#" className="btn btn-sm"><FontIcon icon="cloud"/></a></li>
 </ul>
 */
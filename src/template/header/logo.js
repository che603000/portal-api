/**
 * Created by alex on 05.09.2016.
 */
import React, {Component} from "react";
import {Link} from "react-router";

export default ({children}) => {
    return (
        <div className="col-md-2">
            <Link to="/"><h3>К+ #АПИ</h3></Link>
        </div>
    )
}
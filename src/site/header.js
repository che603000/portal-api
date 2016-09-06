/**
 * Created by alex on 05.09.2016.
 */
import React, {Component} from "react";
import {store} from '../store'

export default ({children}) => {
    const btn ={
        name: 'test',
        type:'POPOVER',
        open: true
    }
    return (
            <div id="header" className="row">
                <div className="col-md-2">
                    <h2>К+ #АПИ</h2>

                </div>
                <div  className="col-md-8">
                    <button className="btn btn-default" onClick={() => {store.dispatch(btn)}}>Pover</button>
                </div>
            </div>
     )
}
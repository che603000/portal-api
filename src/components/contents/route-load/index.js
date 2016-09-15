"use strict";
import React from 'react'
import Component from './component'
import Route from './route'

export const id = "RouteLoad"

export reducer from './reducer'

export middleware from './middleware'

export default (props)=>{
    return <Route {...props} component={Component}/>
}


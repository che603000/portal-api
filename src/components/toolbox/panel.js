/**
 * Created by Александр on 18.09.2016.
 */
import React from 'react'

export default ({children, position = "left"})=>(
    <ul className={`nav navbar-nav navbar-${position}`}>
        {children}
    </ul>
)


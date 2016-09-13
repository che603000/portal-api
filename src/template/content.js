/**
 * Created by alex on 05.09.2016.
 */
import React from "react";


export default ({children}) => {
    return (
        <div id="content" className="col-md-8">
            <div className="app-content">
                {children}
            </div>
        </div>
    )
}


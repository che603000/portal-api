import React from "react";
import {Link} from "react-router";


export default  class extends Link {
    render() {
        return (
            <li>
                {super.render()}
            </li>
        )
    }
}



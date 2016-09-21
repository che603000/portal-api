/**
 * Created by alex on 15.09.2016.
 */


import React from "react";
import {Link} from "react-router";
import FontIcon from "../../components/simple/font-icon";

export default (props)=> {
    const {index, params, data} = props;
    return (
        <tr>
            <td>#{index}</td>
            <td>
                <div>
                    <strong>{data.title}</strong>
                    <p className="text-justify">
                        <Link to={`/news/${index}`}>{data.content} </Link>
                    </p>
                </div>

            </td>

            {/*<td><Link to={`/news/${index}`}><FontIcon icon="search"/></Link></td>*/}
        </tr>
    )
}

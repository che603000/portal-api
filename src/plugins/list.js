/**
 * Created by alex on 15.09.2016.
 */


import React from "react";
import {Link} from "react-router";

const Item = (props)=> {

    const {index, params, data} = props;
    return (
        <div>
            {data.id}
            <span> </span>
            {data.name}
            <span> </span>
            <Link to={`/news/page/${index}`}>Page</Link>
            <span> </span>
            <Link to={`/news/${index}`}>View</Link>
        </div>
    )
}

export class List extends React.Component {
    render() {
        const {data, params} = this.props;

        return (
            <div>
                {data.map((d, i)=><Item index={i} data={d} params={params}  key={i}/>)}
            </div>
        )
    }
}
export class View extends React.Component {
    render() {
        const {data, params} = this.props;

        return (
            <div>
                {data.id}
                <span> | </span>
                {data.name}
            </div>
        )
    }
}
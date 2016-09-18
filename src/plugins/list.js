/**
 * Created by alex on 15.09.2016.
 */


import React from "react";
import {Link} from "react-router";
import FontIcon from '../components/simple/font-icon'

class Paging extends React.Component {

    renderItem(text, index) {
        return <li key={`key-${index}`}><Link to={`/news/page/${index}`}>{text}</Link></li>
    }

    createPages(total) {
        let res = [];
        for (let i = 0; i < total-1; i++) {
            res.push(this.renderItem(i + 1, i))
        }
        return res;
    }

    render() {
        const {total} = this.props;

        return (
            <ul className="pagination">
                {this.renderItem(<span>&laquo;</span>, 0)}
                {this.createPages(total-1)}
                {this.renderItem(<span>&raquo;</span>, total)}
            </ul>
        )
    }
}


const Item = (props)=> {

    const {index, params, data} = props;
    return (
        <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            {/*<td><Link to={`/news/page/${index}`}>Page</Link></td>*/}
            <td><Link to={`/news/${index}`}><FontIcon icon="search"/></Link></td>

        </tr>
    )
}

export class List extends React.Component {
    render() {
        const {data, params} = this.props;
        return (
            <div>
                <table className="table table-striped">
                    <tbody>
                    {data.map((d, i)=><Item index={i} data={d} params={params} key={i}/>)}
                    </tbody>
                </table>
                <div className="text-right">
                    <Paging total={8} />
                </div>
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
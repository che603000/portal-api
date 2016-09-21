/**
 * Created by alex on 15.09.2016.
 */


import React from "react";
import {Link} from "react-router";
import FontIcon from '../../components/simple/font-icon'

export default  class extends React.Component {

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

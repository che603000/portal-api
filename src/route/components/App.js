/**
 * Created by alex on 05.09.2016.
 */
import React, {Component} from "react";
import {Link, browserHistory} from "react-router";


class Item extends Link {
    render() {
        return (
            <li>
                {super.render()}
            </li>
        )
    }
}

class Items extends Component {
    // static get defaultState() {
    //     return {
    //         collapse: true
    //     }
    // }

    constructor(props) {
        super(props);
        this.state = {collapse:  true}
    }

    render() {
        const props = {...this.props},
            {text} = this.props,
            items = this.state.collapse ? null : <ul>{this.props.children}</ul>;

        delete props.text;
        return (
            <li>
                <Link {...props} onClick={::this.onClick}>
                    {text}
                </Link>
                {items}
            </li>
        )
    }

    onClick(e) {
        this.setState({collapse: !this.state.collapse});
        //console.log(this.active);
    }
}


export default function App({children}) {
    return (
        <div>
            <header>
                <ul>
                    <Item to="/home" activeClassName='active'>Home</Item>
                    <Items to="/foo" onlyActiveOnIndex={false} activeClassName='active' text="Foo">
                        <Item to="/foo/1" activeClassName='active'>Foo-1</Item>
                    </Items>

                    <Item to="/bar" activeClassName='active'>Bar</Item>
                </ul>

            </header>
            <div>
                <button onClick={() => browserHistory.push('/bar/10')}>Go to /foo</button>
            </div>
            <div style={{marginTop: '1.5em'}}>{children}</div>
        </div>
    )
}
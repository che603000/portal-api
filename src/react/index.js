/**
 * Created by alex on 19.08.2016.
 */

import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Menu, Item} from "./menu";
import {Provider} from "react-redux";
import {createStore} from "redux";


class Header extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1>Header</h1>
                </div>
            </div>
        )
    }
}

class Main extends Component {
    render() {
        return (
            <div className="row">{this.props.children} </div>
        )
    }
}

class Content extends Component {
    render() {
        return (
            <div className="col-md-8"></div>
        )
    }
}

class App extends Component {
    render() {
        return <div className="container-fluid">{this.props.children}</div>;
    }
}

const LOCATION = window.location,
    ROOT = "#-111";


const items = [
    <Item key="1" href={ROOT}></Item>,
    <Item key="2" text="item2" href="#-222"></Item>,
    <Item key="3" text="Navigate" href="#-333"> isNavigate={false}></Item>
]


let store = createStore((state = {hash: ""}, active)=> {
    switch (active.type) {

        case "MENU_ACTIVE":
            return {...state, hash: active.hash}
        default:
            return state;
    }
})


window.addEventListener('popstate', function (e) {
    store.dispatch({type: "MENU_ACTIVE", hash: LOCATION.hash})
}, false);

setTimeout(()=> {
    store.dispatch({type: "MENU_ACTIVE", hash: LOCATION.hash || ROOT})
}, 0)

ReactDOM.render(
    <Provider store={store}>
        <App>
            <Header/>
            <Main>
                <Menu items={items}/>
                <Content/>
            </Main>
        </App>
    </Provider>,
    document.getElementById('app')
);
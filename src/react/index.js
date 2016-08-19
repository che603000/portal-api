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

const items = [
    <Item key="1" active={true} id="111"></Item>,
    <Item text="item2" key="2" id="222"></Item>
]


let store = createStore((state={activeId :""}, active)=>{
    switch (active.type){

        case "MENU_ACTIVE":
            return {...state, activeId: active.hash}
        default:
            return state;
    }
})



window.addEventListener('popstate', function(e){
    const hs= window.location;
    store.dispatch({type: "MENU_ACTIVE", hash: hs.hash})
}, false);

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
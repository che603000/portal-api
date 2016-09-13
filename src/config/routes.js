/**
 * Created by alex on 13.09.2016.
 */

import React from "react";
import {Route} from "react-router";

import Template from "../template";

import AppRoute from "../components/contents/load";

import Page from "../components/contents/simple";
import NotFound from "../components/contents/not-found";

import menu from "./menu";
import header from "./header";



export default (
    <Route path="/" component={Template} menu={menu} header={header}>
        {/*<IndexRedirect to='test' /> /!* INDEX REDIRECT *!/*/}
        <AppRoute path="test" url="/api/page1" View={props=><h1>{props.data}</h1>}/>
        <AppRoute path="home" component={Page}/>
        <Route path="*" component={NotFound}/>
        {/*<baseContent.Route path="test" url="/api/page1" cache={true} View={props=><h1>{props.data}</h1>}/>*/}

        {/*<baseContent.Route path="home" url="/api/page20" View={props=><h1>{props.data}</h1>}/>*/}

        {/*<IndexRoute component={Home}/>*/}
        {/*<content.Route path="home" url="/api/page1"/>*/}
        {/*/!*{contentRoute(store, {path: 'home', url: "/api/page1"})}*!/*/}
        {/*<Route path="foo" component={Foo}>*/}
        {/*<Route path=":index" component={Foo}/>*/}
        {/*</Route>*/}
        {/*<content.Route path="bar" url="/api/page2">*/}
        {/*<content.Route path=":index" url="/api/page3" mode="json"/>*/}
        {/*</content.Route>*/}
    </Route>
)
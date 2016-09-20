/**
 * Created by alex on 13.09.2016.
 */

import React from "react";
import {Route, IndexRoute, IndexRedirect} from "react-router";
import Template from "../template";
import Page from "../components/contents/simple";
import NotFound from "../components/contents/not-found";
import menu from "./menu";
import header from "./header";
import RouteApp from "../components/route";
import {List, View, Main} from "../plugins/components";

//import {components} from './modules'


export default (
    <Route path="/" component={Template} menu={menu} header={header}>
        <IndexRedirect to='news' /> {/* INDEX REDIRECT */}
        {/*<AppRoute path="test" url="/api/page1" View={props=><h1>{props.data}</h1>}/>*/}
        {/*<IndexRoute component={Main}/>*/}
        <Route path="foo" View={Page} content="root foo" isStatic={true}>
            <RouteApp path=":index" View={Page} content="11111111111111111" isStatic={true}/>
        </Route>
        <RouteApp path="page1"/>
        <Route path="news">
            <IndexRedirect to="page/0"/>
            <RouteApp path='page/:index' View={List}/>
            <RouteApp path=":index" View={View}/>
        </Route>
        <RouteApp path="home" View={Page} content="Привет сайт" isStatic={true}/>

        <RouteApp path="*" View={NotFound} isStatic={true}/>
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
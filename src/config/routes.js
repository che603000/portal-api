/**
 * Created by alex on 13.09.2016.
 */

import React from "react";
import {Route, IndexRedirect} from "react-router";
import Template from "../template";
import Page from "../components/contents/simple";
import NotFound from "../components/contents/not-found";
import RouteApp from "../components/route";
import navigation from "./navigation";
import header from "./header";
import {Table, Details} from "../plugins/components";


export default (
    <Route path="/" component={Template} navigation={navigation} header={header}>
        <IndexRedirect to='news'/> {/* INDEX REDIRECT */}
        <Route path="foo" View={Page} content="root foo" isStatic={true}>
            <RouteApp path=":index" View={Page} content="11111111111111111" isStatic={true}/>
        </Route>
        <RouteApp path="page1"/>
        <Route path="news">
            <IndexRedirect to="page/0"/>
            <RouteApp path='page/:index' View={Table}/>
            <RouteApp path=":index" View={Details}/>
        </Route>
        <RouteApp path="home" View={Page} content="Привет сайт" isStatic={true}/>

        <RouteApp path="*" View={NotFound} isStatic={true}/>
    </Route>
)
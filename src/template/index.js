/**
 * Created by alex on 05.09.2016.
 */

import "./index.css";
import React, {Component} from "react";
import Header from "./header";
import Menu from "./menu";
import Content from "./content";
import Banner from "./banner";
import Footer from "./footer";

export default function App(props) {
    const {menu, header, banner, footer} = props.route;
    return (
        <div id="app" className="container-fluid" style={{height: '100%', display: ''}}>
            <Header>{header}</Header>
            <div className="row">
                <Menu>{menu}</Menu>
                <Content>{props.children}</Content>
                <Banner>{banner}</Banner>
            </div>
            <Footer>{footer}</Footer>
        </div>
    )
}
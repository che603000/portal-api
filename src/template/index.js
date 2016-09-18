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

import  {Popover} from '../components/overlays'
import  FontIcon from '../components/simple/font-icon'


export default function App(props) {
    const {menu, header, banner, footer} = props.route;
    return (
        <div>
            <Header>{header}</Header>
            <div id="app" className="container-fluid">
                <div className="row">
                    <Menu>{menu}</Menu>
                    <Content>{props.children}</Content>
                    <Banner>{banner}</Banner>
                </div>
                <Footer>{footer}</Footer>
                <Popover/>
            </div>
        </div>
    )
}
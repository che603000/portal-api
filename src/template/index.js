/**
 * Created by alex on 05.09.2016.
 * Шаблон сайта
 */

import "./index.css";
import React, {Component} from "react";
import Header from "./header";
import Navigation from "./navigation";
import Content from "./content";
import Banner from "./banner";
import Footer from "./footer";

import  {Popover} from '../components/overlays'

export default function App(props) {
    const {navigation, header, banner, footer} = props.route;
    return (
        <div>
            <Header>{header}</Header>
            <div id="app" className="container-fluid">
                <div className="row">
                    <Navigation>{navigation}</Navigation>
                    <Content>{props.children}</Content>
                    <Banner>{banner}</Banner>
                </div>
                <Footer>{footer}</Footer>
                <Popover/>
            </div>
        </div>
    )
}
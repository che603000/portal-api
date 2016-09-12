/**
 * Created by alex on 05.09.2016.
 */
import React from "react";
import {Item, Items} from '../components/menu'


export default () => {
    return (
        <div id="menu" className="col-md-2">
            <ul>
                <Item to="/test" activeClassName='active'>Test</Item>
                <Item to="/home" activeClassName='active'>Home</Item>
                <Items to="/foo" onlyActiveOnIndex={false} activeClassName='active' text="Foo">
                    <Item to="/foo/1" activeClassName='active'>Foo-1</Item>
                </Items>

                <Item to="/bar" activeClassName='active'>Bar</Item>
            </ul>
        </div>
    )
}

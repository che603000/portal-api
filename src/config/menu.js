/**
 * Created by Администратор on 06.09.2016.

 */

import React from "react";
import {Items, Item} from "../components/menu";


export default  (
    <div>
        <Item to="/page1">Page 1</Item>
        <Items to="/foo" text="Foo">
        <Item to="/home">Home</Item>
            <Item to="/foo/1">Foo-1</Item>
        </Items>

        <Item to="/news">Новости</Item>
    </div>
)
/**
 * Created by Администратор on 06.09.2016.

*/

import React from 'react'

import {Items, Item} from '../components/menu'

export default  (
    <div>
        <Item to="/test" >Test</Item>
        <Item to="/home" >Home</Item>
        <Items to="/foo" onlyActiveOnIndex={false}  text="Foo">
            <Item to="/foo/1" >Foo-1</Item>
        </Items>

        <Item to="/bar" >Bar</Item>
    </div>
)
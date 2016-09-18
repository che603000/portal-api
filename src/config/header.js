/**
 * Created by alex on 13.09.2016.
 */

import React from "react";


import {Panel, Button, Popover} from '../components/toolbox'
import {Form, Field, FontIcon} from '../components/simple'

const OFFSET_Y = -20;

const POPOVER = ({position})=>(
    <Popover title="test" arrow={0.8} position={position} offsetY={OFFSET_Y}>
        <h3>How to comment in React JSX</h3>
        <p>You don't have to use JSX with React. You can just use plain JS. However, we recommend using JSX because
            it</p>
        <p>is a concise and familiar syntax for defining tree structures with attributes.</p>
    </Popover>
)


const POPOVER1 = ({position})=>(
    <Popover title="Login in system..." arrow={0.95} position={position} offsetY={OFFSET_Y} width={400}>
        <p>Enter login and password...</p>
        <Form>
            <Field label="Name" name="name"/>
            <Field label="Password" name="password"/>
        </Form>
    </Popover>
)


const POPOVER2 = (props)=> {
    return (
        <Popover title="test" arrow={0.9} offsetY={OFFSET_Y} {...props}>
            <h3>How to comment in React JSX</h3>
        </Popover>
    )
}


export default  [
    <Panel key="right-panel" position="right">
        <Button id="test" popover={POPOVER}>
            <FontIcon icon="search"/>
        </Button>
        <Button id="user" popover={POPOVER1}>
            <FontIcon icon="user"/>
        </Button>
    </Panel>
]


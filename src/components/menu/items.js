/**
 * Created by Администратор on 06.09.2016.
 */

import React, {Component} from "react";
import {IndexLink, Link} from "react-router";
//import {routerShape} from "react-router/propTypes";


class AppIndexLink extends Link {

    componentDidUpdate(prevProps, prevState){
        super.componentDidUpdate(prevProps, prevState);
        this.onActive();
    }

    onActive = ()=> {
        if(this.props.onActive) {
            const {to, query, hash, state, activeClassName, activeStyle, onlyActiveOnIndex, ...props} = this.props
            const {router} = this.context
            this.props.onActive(router.isActive(to));
        }
    }

    render() {
        console.log('appIndex', this.props, this.context);
        return super.render();
    }
}


export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {collapse: true}
    }

    onActive = (isActive) =>{
        // setTimeout(()=>{
        //     this.setState({collapse: isActive});
        // })

    }

    render() {
        const {text, children, ...props} = this.props;

        //console.log(this.props);

        return (
            <li>
                <AppIndexLink {...props} onClick={this.onClick} onlyActiveOnIndex={false} onActive={this.onActive}>
                    {text}
                </AppIndexLink>
                {this.state.collapse ? null : <ul className="nav-sidebar">{children}</ul>}
            </li>
        )
    }

    onClick = (e) => {
        this.setState({collapse: !this.state.collapse});
        //console.log(this.active);
    }
}

/**
 * Created by alex on 19.08.2016.
 */

import   React, {Component} from 'react'
import { connect } from 'react-redux';


@connect(state => ({
    activeId: state.activeId
}))
export default class Item extends Component {
    static get defaultProps() {
        return {
            href: '#',
            text: 'text',
            activeId: ''
        }
    }

    get classActive(){
        //debugger;
        const href= `${this.props.href}-${this.props.id}`;
        return this.props.activeId === href? 'app-menu-active': '';
    }

    constructor(props) {
        super(props);
    }

    render() {
        const href= `${this.props.href}-${this.props.id}`;
        return (
            <li><a href={href} className={this.classActive} onClick={::this.onClick}>{this.props.text}</a></li>
        )
    }

    onClick(e){
        //debugger;
        //e.preventDefault();
        //this.props.dispatch({type: 'MENU_ACTIVE', id: this.props.id})
        console.log(this.props.text);
    }
}


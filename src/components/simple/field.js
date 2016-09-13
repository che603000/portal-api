/**
 * Created by alex on 07.09.2016.
 */

import React, {Component} from "react";

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {value: props.value}
    }

    get value() {
        return this.state.value;
    }

    get name() {
        return this.props.name;
    }

    render() {
        const {label, type = "text", placeholder, name, id = `id-temp-${Math.random() * 1000 | 0}`} = this.props;
        return (
            <div className="form-group">
                <label htmlFor={id}>{label}</label>
                <input id={id} type={type} name={name } className="form-control" placeholder={placeholder}
                       onChange={::this.onChange}/>

            </div>
        )
    }

    onChange(e) {
        this.setState({value: e.target.value});
    }
}
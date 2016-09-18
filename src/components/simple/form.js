/**
 * Created by alex on 05.09.2016.
 */
import React, {Component} from "react";
import {connect} from "react-redux";

@connect(state => ({
    content: state.content
}))
export default class extends Component {
    static get defaultProps() {
        return {}
    }

    render() {
        return (
            <form role="form" onSubmit={::this.onSubmit}>
                {React.Children.map(this.props.children, (item)=>React.cloneElement(item, {ref: item.props.name}))}
                <button type="submit" className="btn btn-default">Отправить</button>
            </form>

        )
    }

    onSubmit(e) {
        e.preventDefault();
        const values = Object.values(this.refs).reduce((res, obj) => {
            return {...res, [obj.name]: obj.value};
        }, {})

        alert(JSON.stringify(values,null,4))
        //console.log(values);

    }

}





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
            <div>
                <hr/>
                <form role="form" onSubmit={::this.onSubmit}>
                    {React.Children.map(this.props.children, (item)=>React.cloneElement(item, {ref: item.props.name}))}
                    <button type="submit" className="btn btn-default">Отправить</button>
                </form>
            </div>

        )
    }

    onSubmit(e) {
        e.preventDefault();
        debugger;
        const values= Object.values(this.refs).reduce((res, obj) => {
            return {...res, [obj.name]: obj.value};
        }, {})

        console.log(values);
        console.log(this);
    }

}





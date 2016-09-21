/**
 * Created by alex on 15.09.2016.
 */


import React from "react";
import {withRouter} from "react-router";
import FontIcon from '../../components/simple/font-icon'

@withRouter
export default class extends React.Component {

    onClick = (e)=> {
        e.preventDefault();
        this.props.router.goBack();
    }

    render() {
        const {data :{id, name}, params} = this.props;

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Details info</h3>
                </div>
                <div className="panel-body">
                    <span className="col-sm-1">Id: </span><span>{id}</span>
                    <div></div>
                    <span className="col-sm-1">Name: </span><span>{name}</span>
                </div>
                <div className="panel-footer text-left">
                    <a href="#" onClick={this.onClick}><FontIcon icon="list-alt"/></a>
                </div>
            </div>

        )
    }
}
/**
 * Created by alex on 15.09.2016.
 */


import React from "react";

import Row from './row'
import Paging from './paging'

export default class  extends React.Component {
    render() {
        const {data, params} = this.props;
        return (
            <div>
                <table className="table table-striped">
                    <tbody>
                    {data.map((d, i)=><Row index={i} data={d} params={params} key={i}/>)}
                    </tbody>
                </table>
                <div className="text-right">
                    <Paging total={8} />
                </div>
            </div>
        )
    }
}

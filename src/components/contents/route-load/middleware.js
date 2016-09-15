/**
 * Created by alex on 05.09.2016.
 */
//import {store} from "../store";
import {REQUEST, LOAD, ERROR} from "./const";
import {get} from "../../../utils/loader";

export default  function ({getState}) {
    return (next) => (action) => {
        const {type, url} = action;
        switch (type) {
            case REQUEST:
                get(action.url, (error, data)=> {
                    if (error)
                        next({type: ERROR, error, url})
                    else
                        next({type: LOAD, data, url})
                })

            default:
                return next(action);
        }
    }
}



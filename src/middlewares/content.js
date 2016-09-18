/**
 * Created by alex on 05.09.2016.
 */
import {REQUEST, LOAD, ERROR} from "../const";
import {get} from "../utils/loader";

export default  function ({getState}) {
    return (next) => (action) => {
        const {type, ...params} = action;
        switch (type) {
            case REQUEST:
                const url = `/api${action.pathname}`
                get(url, (error, data)=> {
                    if (error)
                        next({type: ERROR, error, ...params})
                    else
                        next({type: LOAD, data, ...params})
                })

            default:
                return next(action);
        }
    }
}



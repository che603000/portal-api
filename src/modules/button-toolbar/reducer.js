/**
 * Created by alex on 14.09.2016.
 */

import {CLICK} from './const'

export default   {
    header: (state = {}, action) => {
        const {type, ...params} = action;
        switch (type) {
            case CLICK:
                return {...params}
            default:
                return state;
        }
    }
}



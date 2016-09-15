/**
 * Created by alex on 14.09.2016.
 */

import {CLICK, FIELD} from './const'

export default   {
    [FIELD]: (state = {}, action) => {
        const {type, ...params} = action;
        switch (type) {
            case CLICK:
                return {...params}
            default:
                return state;
        }
    }
}



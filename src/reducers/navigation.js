/**
 * Created by alex on 14.09.2016.
 */

import {COLLAPSE, FIELD_NAVIGATION as FIELD} from "../const";

export default   {
    [FIELD]: (state = {}, action) => {
        const {type, pathname, collapse} = action;
        switch (type) {
            case COLLAPSE:
                const value = (collapse === undefined) ? !state[pathname] : collapse;
                return {...state, [pathname]: value}
            default:
                return state;
        }
    }
}



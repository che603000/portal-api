/**
 * Created by alex on 05.09.2016.
 */
import {store} from '../store'

export const LOADING ='@@loader/LOADING';
export const LOADED ='@@loader/LOADED';
export const ERROR ='@@loader/ERROR';

export const request = (props)=> {
    store.dispatch({
        type: LOADING,
        mode: 'text',
        ...props,
    })
}

export default  function ({getState}) {
    return (next) => (action) => {
        switch (action.type) {
            case LOADING:
                window.fetch(action.url)
                    .then(res=> {
                        if (res.ok)
                            res[action.mode]().then(data=> {
                                store.dispatch({type: LOADED, data, url: action.url})
                            })
                        else
                            throw res;

                    })
                    .catch(err=> {
                        store.dispatch({type: ERROR, err, url: action.url})
                    })
        }

        return next(action);
    }
}




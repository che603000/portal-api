/**
 * Created by alex on 05.09.2016.
 */

export default  function ({getState}) {
    return (next) => (action) => {
        switch (action.type) {
            case 'LOADING':
                window.fetch(action.url)
                    .then(res=> {
                        if (res.ok)
                            res[action.mode]().then(data=> {
                                next({type: 'LOADED', data, url: action.url})
                            })
                        else
                            throw res;

                    })
                    .catch(err=> {
                        next({type: 'ERROR', err, url: action.url})
                    })

        }

        return next(action);
    }
}




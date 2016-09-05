/**
 * Created by alex on 05.09.2016.
 */

export default  function ({getState}) {
    return (next) => (action) => {
        switch (action.type) {
            case 'LOADING':
                window.fetch(`/users`)
                    .then(res=> {
                        if (res.ok)
                            res.text().then(data=> {
                                next({type: 'LOADED', text: data})
                            })

                    })
                    .catch(err=> {
                        next({type: 'ERROR', err})
                    })

        }

        return next(action);
    }
}




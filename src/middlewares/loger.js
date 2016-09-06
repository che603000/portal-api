/**
 * Created by alex on 05.09.2016.
 */

export default ({getState}) => {
    return (next) => (action) => {
        console.log('dispatch:', action)

        // Call the next dispatch method in the middleware chain.
        let returnValue = next(action)

        console.log('state:', getState())

        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return returnValue
    }
}


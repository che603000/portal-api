/**
 * Created by Александр on 10.09.2016.
 */

import $ from 'jquery'

export const get = (url,  callback)=> {
    return $.get(url, data=> {
        callback(null, data)
    }).fail(xhr=> {
        callback(xhr)
    });
}
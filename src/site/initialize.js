/**
 * Created by alex on 17.08.2016.
 */

import _ from 'underscore'

_.templateSettings = {
    evaluate    : /\{\{([\s\S]+?)\}\}/g,
    interpolate : /\{\{=([\s\S]+?)\}\}/g,
    escape      : /\{\{-([\s\S]+?)\}\}/g
};

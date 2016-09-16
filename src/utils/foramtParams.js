/**
 * Created by alex on 16.09.2016.
 */


/* подстановка параметров в url
    template - строка типа "/api/test/:index/:number"
    params  объект параметров {index: 'test', number :90}
    flags  - флаги регулярных выражений. По умолчанию, g - поиск нескольких вхождений, i - независимость от регистра
    return  "/api/test/90"
*/
export default (template, params, flags = 'gi')=> {
    return Object.keys(params).reduce((res, key)=>res.replace(RegExp(`:${key}`, flags), params[key]), template);
}
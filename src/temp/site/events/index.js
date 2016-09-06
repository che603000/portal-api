/**
 * Created by alex on 17.08.2016.
 */


export default class {
    constructor($container) {
        this.$container = $container;
    }

    on(type, handler, context) {
        this.$container.on(type, (e, d)=> {
            handler.call(context, d)
        })
    }

    fire(type, e) {
        this.$container.trigger(type, e)
    }
}
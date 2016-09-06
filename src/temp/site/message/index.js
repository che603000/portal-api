/**
 * Created by alex on 09.09.2015.
 */


import _ from "underscore";
import $ from "jquery";
import "./index.css";
import template from "./template.html";

export  default  class Message {

    get template() {
        return _.template(template);
    }

    get defaults() {
        return {
            className: 'alert-warning',
            title: '',
            content: '',
            time: 0,
            animation: 0
        }
    }

    constructor($container) {
        this.$el = $("<div class='site-message-block'></div>")
        $container = $container || $('body');
        $container.append(this.$el);
    }

    send(data) {
        const opt = {...this.defaults, ...data},
            $el = this._create(opt);
        this.$el.append($el);
        data.time && this._time($el, data);
        return $el;
    }

    _create(data) {
        const html = this.template(data)
        return $(html);
    }

    _time($el, data) {
        setTimeout(function () {
            $el.hide(data.animation, function () {
                $el.alert('close');
            });
        }, data.time);
    }
}


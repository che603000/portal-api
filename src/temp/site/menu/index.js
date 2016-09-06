/**
 * Created by alex on 17.08.2016.
 */

import templateItem from "./template-item.html";
import templateItems from "./template-items.html";
import _ from "underscore";
import $ from "jquery";
import app from "../index";

export class Item {

    get defaults() {
        return {
            label: 'label',
            href: 'index'
        }
    }

    get template() {
        return _.template(templateItem)
    }

    constructor($container, _item) {
        const item = {...this.defaults, ..._item}
        this.id = item.id || 'all';
        this.$container = $container;
        this.$el = $(this.template(item)).on('click', this.onClick.bind(this))
        if (item.items)
            this.items = new Items(this.$el, item.items);
    }

    render() {
        this.$container.append(this.$el);
        if (this.items)
            this.$container.append(this.items.render());
    }

    onClick(e) {
        e.preventDefault() // браузер - стоять
        e.stopPropagation() // событие - не всплывать
        const type= `${this.id}:click`;
        console.log(type);
        app.events.fire(type, {target: this, event: e});
        //console.log(e);
    }
}

export  default class Items {

    get template() {
        return _.template(templateItems)
    }

    constructor($container, items = []) {
        this.$container = $container;
        this.$el = $(this.template({}));
        this.items = items.map(this.create, this);
    }

    create(item) {
        return new Item(this.$el, item);
    }

    add(item) {
        this.items.push(this.create(item));
    }

    render() {
        this.items.forEach(item=> {
            this.$el.append(item.render());
        })
        this.$container.append(this.$el);
    }

}

// export default ($container, items)=> {
//     return new Items($container, items);
// }
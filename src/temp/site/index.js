/**
 * Created by alex on 17.08.2016.
 */
import "./initialize";
import $ from "jquery";
import Message from "./message";
import Menu from "./menu";
import Events from "./events";
import Content from "./content";

export default {
    modules:[],
    message: new Message($('#main')),
    events: new Events($('<span/>')),
    content: new Content($('#content')),
    menu : new Menu($('#menu')),
    start(){
        this.modules.forEach(m=>{
            m.menu && this.menu.add(m.menu, m);
        });
        this.render();
    },
    render(){
        this.menu.render();
        this.content.render(this.modules[0].content);
    }
}
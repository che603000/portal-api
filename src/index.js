/**
 * Created by alex on 17.08.2016.
 */

import "./index.css";
import $ from "jquery";
import app from "./site";

import main from './modules/main'
import page1 from './modules/page1'

const {menu, events} = app;

//import './exp/redux'
import './react'

// app.modules.push(main(app));
// app.modules.push(page1(app));
//
// app.start();

//require('./modules/content')(app)


// const _menu = menu($('#menu'), [
//     {label: 'root0'},
//     {label: 'root1'},
//     {
//         label: 'root2',
//         href: '2'
//     },
//     {
//         label: 'root3',
//         items: [
//             {label: 'root3-1'},
//             {label: 'root3-2'},
//             {label: 'root3-3'},
//             {label: 'root3-4'},
//         ]
//     },
// ])
// _menu.render();
//
// events.on('menu:click',  console.log)

//
// fetch('/article/fetch/user.json')
//     .then(function (response) {
//         if (response.ok)
//             return response;
//         else
//             throw `${response.status}: ${response.statusText}`
//
//     })
//     // .then(function(user) {
//     //     alert(user.name); // iliakan
//     // })
//     .catch(err=> {
//         site.message.send({
//             className: 'alert-danger',
//             title: 'Http error',
//             content: err,
//             time: 2000
//         });
//     });


// site.message.send({
//     title: 'initial',
//     content: 'Вернёт подмассив из всех элементов родительского, за исключением последнего. Довольно полезно при работе с объектом arguments. Если передан n, то возвращённый подмассив не будет содержать n последних элементов родительского.',
//     time: 2000
// });
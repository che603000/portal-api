/**
 * Created by alex on 20.09.2016.
 */

import express from "express";
const router = express.Router();

var feed = require("feed-read");


const ys = "https://news.yandex.ru/index.rss"
const aif = "http://www.aif.ru/rss/politics.php"
const aif1 = "http://www.aif.ru/rss/news.php"
const aif2 = "http://www.aif.ru/rss/articles.php"


export default (app, config)=> {

    /* GET users listing. */
    router.get('/page1', function (req, res, next) {
        setTimeout(()=> {
            res.send('Декан факультете искусств Московского государственного университета Александр Лободанов не знает, поступала ли бывшая чиновница министерства обороны в магистратуру по направлению «Изящные искусства». Об этом он в пятницу, 16 сентября, заявил в интервью радиостанции «Говорит Москва».');

        }, 2000)
    });
    router.get('/page2', function (req, res, next) {
        res.send('2222222222222222222222');
    });
    router.get('/page3', function (req, res, next) {
        res.json({})


    });


    router.get('/news/page/:index', function (req, res, next) {
        const index = parseInt(req.params.index),
            size = 10,
            total = 8;

        feed(aif2, function (err, articles) {
            const r = [].concat(articles).slice(index * size, index * size + total)
            res.json(r);
        })
    });

    router.get('/news/:index', function (req, res, next) {
        const item = NEWS[req.params.index];
        res.json(item);
    });

    app.use('/api', router);

}
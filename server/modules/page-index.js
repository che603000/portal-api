/**
 * Created by alex on 20.09.2016.
 */

import express from "express";
import fs from "fs";

import path from "path";
const router = express.Router();

export default (app, config)=> {

    const INDEX_FILE = path.join(__dirname, '../public', 'index.html');
    /* GET home page. */

    router.get('/api', function (req, res, next) {
        res.render('api');
    });

    router.get('/api/*', function (req, res, next) {
        next({status: 404});
    });

    router.get('/*', function (req, res, next) {
        if (fs.exists(INDEX_FILE))
            res.sendFile(INDEX_FILE);
        else
            res.render('index', {title: "Express"});
    });

    app.use('/', router);

}
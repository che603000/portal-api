var express = require('express');
var router = express.Router();
var path = require('path');


const INDEX_FILE = path.join(__dirname, '../public', 'index.html');
/* GET home page. */

router.get('/api/*', function (req, res, next) {
    next({status: 404});
});


router.get('/*', function (req, res, next) {
    res.sendFile(INDEX_FILE);
});

module.exports = router;

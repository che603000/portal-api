var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/page1', function (req, res, next) {
    res.send('111111111111111111111');
});
router.get('/page2', function (req, res, next) {
    res.send('2222222222222222222222');
});
router.get('/page3', function (req, res, next) {
    res.json({text: '3333333333333333333333'});
});


const NEWS = [
    {id: 1, name: '111111111111111111111'},
    {id: 2, name: '222222222222222222222'},
    {id: 3, name: '333333333333333333'},
    {id: 4, name: '444444444444444444'},
    {id: 5, name: '55555555555555555'},
    {id: 6, name: '6666666666666666666666'},
    {id: 7, name: '77777777777777777777777'},
];


router.get('/news/page/:index', function (req, res, next) {
    res.json(NEWS);
});


router.get('/news/:index', function (req, res, next) {
    const item = NEWS[req.params.index];
    res.json(item);
});


module.exports = router;

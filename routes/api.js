var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/page1', function(req, res, next) {
  res.send('111111111111111111111');
});
router.get('/page2', function(req, res, next) {
  res.send('2222222222222222222222');
});
router.get('/page3', function(req, res, next) {
  res.json({text:'3333333333333333333333'});
});

module.exports = router;

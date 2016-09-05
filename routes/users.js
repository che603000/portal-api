var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('The handful of refactoring steps needed to convert an existing component to an ES6 class / React 0.13 and beyond component is pretty straightforward. While `React.createClass` is not deprecated, and will not be until JavaScript has a story for mixins, there is a strong consensus that working in the direction the language is heading is wise.');
});

module.exports = router;

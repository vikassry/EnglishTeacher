var express = require('express');
var router = express.Router();
var cool = require('cool-ascii-faces');

/* GET home page. */

router.get('/cool', function(req, res){
	res.send(cool());
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

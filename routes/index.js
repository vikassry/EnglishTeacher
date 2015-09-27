var express = require('express');
var router = express.Router();
var cool = require('cool-ascii-faces');

/* GET home page. */

router.get('/cool', function(req, res){
	res.send(cool());
});


var pg = require('pg');

router.get('/db', function (request, response) {
	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
		client.query('SELECT * FROM test_table', function(err, result) {
			done();
			if (err)
				{ console.error(err); response.send("Error " + err); }
			else
				{ response.send({results: result.rows}); }
		});
	});
})

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

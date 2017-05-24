var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/events', function(req, res, next) {
  res.json({ title: 'teste!' });
});

module.exports = router;

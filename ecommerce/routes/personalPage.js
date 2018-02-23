var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('personalPage', { title: 'Personal Page' });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var path = require('path');
var public = path.join(__dirname, 'public');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(public, 'index.html'));
});

module.exports = router;

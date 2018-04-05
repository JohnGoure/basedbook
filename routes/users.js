var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.json([{
    id:1,
    username:'jgoure'
  }, {
    id:2, 
    username: 'D0loresH5ze'
  }]);
});

module.exports = router;

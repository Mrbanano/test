var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({ message: 'tickets' });
});
/* GET users listing. */
router.post('/', function (req, res, next) {
  res.json({ message: 'tickets' });
});
/* GET users listing. */
router.put('/:id', function (req, res, next) {
  res.json({ message: 'tickets' });
});
/* GET users listing. */
router.delete('/:id', function (req, res, next) {
  res.json({ message: 'tickets' });
});

module.exports = router;

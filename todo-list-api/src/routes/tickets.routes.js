var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({ message: 'tickets' });
});
/* GET  a user . */
router.get('/:id', function (req, res, next) {
  res.json({ message: 'tickets' });
});
/* POST  user in listing. */
router.post('/', function (req, res, next) {
  const response = req.body;
  console.log(response);
  res.status(201);
});
/*UDPATE a  user  in listing. */
router.put('/:id', function (req, res, next) {
  res.json({ message: 'tickets' });
});
/* DELETE a user  in listing. */
router.delete('/:id', function (req, res, next) {
  res.json({ message: 'tickets' });
});

module.exports = router;

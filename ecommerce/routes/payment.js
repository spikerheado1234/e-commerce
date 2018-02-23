
router.get('/', function(req, res) {
  res.render('payment' , { title: 'Payment' });
  }
);


module.exports = router;

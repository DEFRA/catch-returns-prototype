var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Licence type
router.post('/licence-type', function (req, res) {
  var LicenceType = req.session.data['licence-type']
  if (LicenceType === 'A 9-digit licence number') {
    res.redirect('/9-digit-licence-details')
  } else {
    res.redirect('21-digit-licence-details')
  }
})

module.exports = router

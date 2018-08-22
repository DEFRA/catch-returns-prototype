const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Branching
router.post('/summary-empty', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['over-18']

  if (over18 === 'true') {
    res.redirect('/summary-empty')
  } else {
    res.redirect('/confirm')
  }
})


module.exports = router

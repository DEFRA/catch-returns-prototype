module.exports = [].concat(
  require('./home'),
  require('./public'),
  require('./feedback'),
  require('./feedback-thankyou'),
  require('./clear-session'),
  require('./landing'),

  // Catch returns
  require('./catch-return/which-licence-do-you-have'),
  require('./catch-return/new-licence-number'),
  require('./catch-return/old-licence-number'),
  require('./catch-return/have-you-fished')
)
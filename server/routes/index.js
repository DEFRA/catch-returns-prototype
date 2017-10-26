module.exports = [].concat(
  require('./home'),
  require('./public'),
  require('./feedback'),
  require('./feedback-thankyou'),
  require('./clear-session'),
  require('./landing'),

  // Existing catch returns
  require('./existing'),
  require('./existing/which-licence-do-you-have'),
  require('./existing/new-licence-number'),
  require('./existing/old-licence-number'),
  require('./existing/have-you-fished'),
  require('./existing/did-not-fish'),
  require('./existing/add-river'),
  require('./existing/select-river-sea-trout'),
  require('./existing/select-river-salmon'),
  require('./existing/add-small-sea-trout'),
  require('./existing/add-salmon-and-large-sea-trout'),
  require('./existing/thank-you'),
  require('./existing/review'),
  require('./existing/thank-you-email'),
  require('./existing/delete-river'),
  require('./existing/delete-bigFish'),
  require('./existing/edit-river'),
  require('./existing/edit-bigFish')
)
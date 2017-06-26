module.exports = [].concat(
  require('./home'),
  require('./public'),
  require('./feedback'),
  require('./feedback-thankyou'),
  require('./clear-session'),
  require('./landing'),

  // Catch returns
  require('./catch-return'),
  require('./catch-return/which-licence-do-you-have'),
  require('./catch-return/new-licence-number'),
  require('./catch-return/old-licence-number'),
  require('./catch-return/have-you-fished'),
  require('./catch-return/did-not-fish'),
  require('./catch-return/add-river'),
  require('./catch-return/select-river-sea-trout'),
  require('./catch-return/select-river-salmon'),
  require('./catch-return/add-small-sea-trout'),
  require('./catch-return/add-salmon-and-large-sea-trout'),
  require('./catch-return/thank-you'),
  require('./catch-return/review'),
  require('./catch-return/thank-you-email'),
  require('./catch-return/delete-river'),
  require('./catch-return/delete-bigFish'),
  require('./catch-return/edit-river'),
  require('./catch-return/edit-bigFish')
)
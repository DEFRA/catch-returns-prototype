const handlers = {
  get: function (request, reply) {
    return reply.view('old-licence-number', {
      pageTitle: 'Enter your licence details',
      errorMessage: 'Enter a valid 9 digit licence number',
      errorMessageTwo: 'Enter a valid postcode',
    })
  },
  post: function (request, reply) {
    return reply.redirect('/')
  }
}

module.exports = [{
  method: 'GET',
  path: '/catch-return/old-licence-number',
  config: {
    handler: handlers.get
  }
},
{
  method: 'POST',
  path: '/catch-return/old-licence-number',
  config: {
    handler: handlers.post
  }
}]

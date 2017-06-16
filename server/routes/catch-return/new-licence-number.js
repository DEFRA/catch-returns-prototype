const handlers = {
  get: function (request, reply) {
    return reply.view('new-licence-number', {
      pageTitle: 'Enter your licence details',
      errorMessage: 'Enter the last 6 digits of your licence number',
      errorMessageTwo: 'Enter a valid postcode',
    })
  },
  post: function (request, reply) {
    return reply.redirect('/')
  }
}

module.exports = [{
  method: 'GET',
  path: '/catch-return/new-licence-number',
  config: {
    handler: handlers.get
  }
},
{
  method: 'POST',
  path: '/catch-return/new-licence-number',
  config: {
    handler: handlers.post
  }
}]

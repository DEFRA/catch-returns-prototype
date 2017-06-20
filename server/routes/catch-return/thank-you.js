const handlers = {
  get: function (request, reply) {
    return reply.view('thank-you', {
      pageTitle: 'Thank you',
      errorMessage: 'Enter a valid email address',
    })
  },
  post: function (request, reply) {
    return reply.redirect('thank-you-email')
  }
}


module.exports = [{
  method: 'GET',
  path: '/catch-return/thank-you',
  config: {
    handler: handlers.get
  }
},
{
  method: 'POST',
  path: '/catch-return/thank-you',
  config: {
    handler: handlers.post
  }
}]

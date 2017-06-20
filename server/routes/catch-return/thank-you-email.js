const handlers = {
  get: function (request, reply) {
    return reply.view('thank-you-email', {
      pageTitle: 'Thank you',
      // errorMessage: 'Tell us how long your licence number is',
    })
  },
  post: function (request, reply) {
    return reply.redirect('thank-you')
  }
}


module.exports = [{
  method: 'GET',
  path: '/catch-return/thank-you-email',
  config: {
    handler: handlers.get
  }
},
{
  method: 'POST',
  path: '/catch-return/thank-you-email',
  config: {
    handler: handlers.post
  }
}]

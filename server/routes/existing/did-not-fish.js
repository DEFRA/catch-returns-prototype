const handlers = {
  get: function (request, reply) {
    return reply.view('existing/did-not-fish', {
      pageTitle: 'Review the information that you have entered',
    })
  },
  post: function (request, reply) {

  }
}


module.exports = [{
  method: 'GET',
  path: '/existing/did-not-fish',
  config: {
    handler: handlers.get
  }
},
{
  method: 'POST',
  path: '/existing/did-not-fish',
  config: {
    handler: handlers.post
  }
}]

const handlers = {
  get: function (request, reply) {
    return reply.view('did-not-fish', {
      pageTitle: 'Review the information that you have entered',
    })
  },
  post: function (request, reply) {

  }
}


module.exports = [{
  method: 'GET',
  path: '/catch-return/did-not-fish',
  config: {
    handler: handlers.get
  }
},
{
  method: 'POST',
  path: '/catch-return/did-not-fish',
  config: {
    handler: handlers.post
  }
}]

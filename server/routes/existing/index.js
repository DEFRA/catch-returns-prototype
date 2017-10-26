const handlers = {
  get: function (request, reply) {
    return reply.redirect('existing/licence-details')
  }
}


module.exports = [{
  method: 'GET',
  path: '/existing',
  config: {
    handler: handlers.get
  }
}]

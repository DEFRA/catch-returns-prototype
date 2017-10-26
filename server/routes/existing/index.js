const handlers = {
  get: function (request, reply) {
    return reply.redirect('existing/new-licence-number')
  }
}


module.exports = [{
  method: 'GET',
  path: '/existing',
  config: {
    handler: handlers.get
  }
}]

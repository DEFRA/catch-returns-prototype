const handlers = {
  get: function (request, reply) {
    return reply.redirect('catch-return/new-licence-number')
  }
}


module.exports = [{
  method: 'GET',
  path: '/catch-return',
  config: {
    handler: handlers.get
  }
}]

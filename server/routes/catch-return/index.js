const handlers = {
  get: function (request, reply) {
    return reply.redirect('catch-return/which-licence-do-you-have')
  }
}


module.exports = [{
  method: 'GET',
  path: '/catch-return',
  config: {
    handler: handlers.get
  }
}]

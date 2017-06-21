const handlers = {
  get: function (request, reply) {
    return reply.view('select-river-sea-trout', {
      pageTitle: 'Please enter details for the river where you fished',
      errorMessage: 'Select a river',
      riverName: request.session.riverName,
      rivers: global.rivers,
    })
  },
  post: function (request, reply) {
    request.session.riverName = request.payload.riverName
    return reply.redirect('add-small-sea-trout')
  }
}


module.exports = [{
  method: 'GET',
  path: '/catch-return/select-river-sea-trout',
  config: {
    handler: handlers.get
  }
},
{
  method: 'POST',
  path: '/catch-return/select-river-sea-trout',
  config: {
    handler: handlers.post
  }
}]

const handlers = {
  get: function (request, reply) {
    return reply.view('delete-river', {
      pageTitle: 'Are you sure you want to delete this river?',   
    })
  },
  post: function (request, reply) {
    if (request.payload.next === "Yes") {
      riversCount -= 1;
      delete global.rivers[request.query.deleteUrl];
      return reply.redirect('review')
    } else {
      return reply.redirect('review')
    }
  }
}


module.exports = [{
  method: 'GET',
  path: '/catch-return/delete-river',
  config: {
    handler: handlers.get
  }
},
{
  method: 'POST',
  path: '/catch-return/delete-river',
  config: {
    handler: handlers.post
  }
}]

const handlers = {
  get: function (request, reply) {
    return reply.view('delete-bigFish', {
      pageTitle: 'Are you sure you want to delete this Salmon or large sea trout?',
    })
  },
  post: function (request, reply) {
    if (request.payload.next === "Yes") {
      delete global.rivers[request.query.deleteUrl];
      return reply.redirect('review')
    } else {
      return reply.redirect('review')
    }
  }
}


module.exports = [{
  method: 'GET',
  path: '/catch-return/delete-bigFish',
  config: {
    handler: handlers.get
  }
},
{
  method: 'POST',
  path: '/catch-return/delete-bigFish',
  config: {
    handler: handlers.post
  }
}]

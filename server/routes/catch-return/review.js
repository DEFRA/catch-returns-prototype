const handlers = {

  get: function (request, reply) {

    return reply.view('review', {
      pageTitle: 'Review the information that you have entered',
      rivers: global.rivers,
      smallFish: global.rivers.smallFish,
      bigFish: global.rivers.bigFish,
      river: request.session.riverName,
      riversCounted: riversCount,
    })


  },
  post: function (request, reply) {


  }
}


module.exports = [{
  method: 'GET',
  path: '/catch-return/review',
  config: {
    handler: handlers.get
  }
},
{
  method: 'POST',
  path: '/catch-return/review',
  config: {
    handler: handlers.post
  }
}]

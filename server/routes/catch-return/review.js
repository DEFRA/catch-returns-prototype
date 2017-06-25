const handlers = {
  get: function (request, reply) {
    return reply.view('review', {
      pageTitle: 'Review the information that you have entered',
      rivers: global.rivers,
      riverCount: global.rivers.length,
      // smallFish: global.river.smallFish,
      // smallFishCount: global.river.smallFish.length,
      bigFish: global.bigFish,
      bigFishCount: global.bigFish.length,
      river: request.session.riverName,
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

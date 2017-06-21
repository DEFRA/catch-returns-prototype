const handlers = {
  get: function (request, reply) {
    return reply.view('review', {
      pageTitle: 'Review the information that you have entered',
      //errorMessage: 'Tell us how long your licence number is',
      rivers: global.rivers,
      riverCount: global.rivers.length,
      validMonths: global.validMonths,
      validMonthsCount: global.validMonths.length,
      smallFish: global.smallFish,
      smallFishCount: global.smallFish.length,
      bigFish: global.bigFish,
      bigFishCount: global.bigFish.length,
      river: request.session.riverName
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

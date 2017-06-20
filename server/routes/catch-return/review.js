const handlers = {
  get: function (request, reply) {
    return reply.view('review', {
      pageTitle: 'Review the information that you have entered',
      //errorMessage: 'Tell us how long your licence number is',
      rivers: global.rivers,
      SmallSeaTrout: global.rivers.SmallSeaTrout,
      SalmonAndLargeSeaTrout: global.rivers.SalmonAndLargeSeaTrout,
      count: global.rivers.length,
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

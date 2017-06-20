const handlers = {
  get: function (request, reply) {
    return reply.view('have-you-fished', {
      pageTitle: 'Have you fished during the period of your licence?',
      errorMessage: 'Tell us if you fished',
      startText: request.session.startText,
      endText: request.session.endText,
      items: {
        one: {
          text: 'Yes',
          name: 'haveFished',
          id: 'Yes',
        },
        two: {
          text: 'No',
          name: 'haveFished',
          id: 'NoNew',
        },
      }
    })
  },
  post: function (request, reply) {
    var haveFished = request.payload.haveFished
    returnURL = request.query.returnUrl

    if (haveFished === 'Yes') {
      return reply.redirect('/')
    } else {
      return reply.redirect('/')
    }

  }
}


module.exports = [{
  method: 'GET',
  path: '/catch-return/have-you-fished',
  config: {
    handler: handlers.get
  }
},
{
  method: 'POST',
  path: '/catch-return/have-you-fished',
  config: {
    handler: handlers.post
  }
}]

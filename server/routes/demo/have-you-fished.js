const handlers = {
  get: function (request, reply) {
    return reply.view('demo/have-you-fished', {
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
          text: 'Yes, but I didn\'t catch anything',
          name: 'haveFished',
          id: 'Nil',
        },
        three: {
          text: 'No, I did not fish (DNF)',
          name: 'haveFished',
          id: 'No',
        },
      },
       itemsTwo: {
        one: {
          text: '2017',
          name: '2017',
          id: '2017',
        },
        two: {
          text: '2018',
          name: '2018',
          id: '2018',
        }
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
  path: '/demo/have-you-fished',
  config: {
    handler: handlers.get
  }
},
{
  method: 'POST',
  path: '/demo/have-you-fished',
  config: {
    handler: handlers.post
  }
}]

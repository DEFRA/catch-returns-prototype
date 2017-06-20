const handlers = {
  get: function (request, reply) {
    return reply.view('which-licence-do-you-have', {
      pageTitle: 'How long is your licence number?',
      errorMessage: 'Tell us how long your licence number is',
      items: {
        one: {
          text: 'I have a 9-digit licence number',
          name: 'licenceNumber',
          id: 'Old',
          subText: 'For example, 345612895',
        },
        two: {
          text: 'My licence number is longer than 9 digits',
          name: 'licenceNumber',
          id: 'New',
          subText: 'For example, 00010418-3WC3JDS-B7A718',
        },
      }
    })
  },
  post: function (request, reply) {
    var licenceNumber = request.payload.licenceNumber
    returnURL = request.query.returnUrl
    if (licenceNumber === 'Old') {
      return reply.redirect('old-licence-number')
    } else {
      return reply.redirect('new-licence-number')
    }

  }
}


module.exports = [{
  method: 'GET',
  path: '/catch-return/which-licence-do-you-have',
  config: {
    handler: handlers.get
  }
},
{
  method: 'POST',
  path: '/catch-return/which-licence-do-you-have',
  config: {
    handler: handlers.post
  }
}]

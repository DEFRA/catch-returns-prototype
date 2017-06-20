const handlers = {
  get: function (request, reply) {
    return reply.view('add-river', {
      pageTitle: 'Please enter details for the river where you fished',
      errorMessage: 'Select a river',
      errorMessageTwo: 'Enter the nearest town',
      errorMessageThree: 'Enter the number of days you fished before 16th June',
      errorMessageFour: 'Enter the number of days you fished after 16th June',
    })
  },
  post: function (request, reply) {
    request.session.riverName = request.payload.riverName
    request.session.nearestTown = request.payload.nearestTown
    request.session.daysFishedBefore = request.payload.daysFishedBefore
    request.session.daysFishedAfter = request.payload.daysFishedAfter
    
    return reply.redirect('review')
  }
}


module.exports = [{
  method: 'GET',
  path: '/catch-return/add-river',
  config: {
    handler: handlers.get
  }
},
{
  method: 'POST',
  path: '/catch-return/add-river',
  config: {
    handler: handlers.post
  }
}]

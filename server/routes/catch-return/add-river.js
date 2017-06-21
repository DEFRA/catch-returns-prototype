const handlers = {
  get: function (request, reply) {
    return reply.view('add-river', {
      pageTitle: 'Please enter details for the river where you fished',
      errorMessage: 'Select a river',
      errorMessageTwo: 'Enter the nearest town',
      errorMessageThree: 'Enter the number of days you fished before 16th June',
      errorMessageFour: 'Enter the number of days you fished after 16th June',
      currentRiver: true,
    })
  },
  post: function (request, reply) {
    request.session.riverName = request.payload.riverName
    request.session.riverTown = request.payload.nearestTown
    request.session.riverDaysBeforeJune = request.payload.daysFishedBefore
    request.session.riverDaysAfterJune = request.payload.daysFishedAfter

    // Save river
    var river = JSON.parse(JSON.stringify(request.session))
    global.rivers.push(river)

    


    //return reply.redirect('review')
    // return reply.redirect('add-small-sea-trout')
    // return reply.redirect('add-salmon-and-large-sea-trout')


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

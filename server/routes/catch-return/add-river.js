const handlers = {
  get: function (request, reply) {
    return reply.view('add-river', {
      pageTitle: 'Please enter details for the river where you fished',
      errorMessage: 'Select a river',
      errorMessageTwo: 'Enter the nearest town',
      errorMessageThree: 'Enter the number of days you fished before 16th June',
      errorMessageFour: 'Enter the number of days you fished after 16th June',
      // currentRiver: true,
      rivers: global.rivers,

      // Return users
      // riverName: request.session.riverName,
      // riverTown: request.session.riverTown,
      // riverDaysBeforeJune: request.session.riverDaysBeforeJune,
      // riverDaysAfterJune: request.session.riverDaysAfterJune
    })
  },
  post: function (request, reply) {
    var currentRiver = request.payload.riverName
    request.session.riverTown = request.payload.riverTown
    request.session.riverDaysBeforeJune = request.payload.riverDaysBeforeJune
    request.session.riverDaysAfterJune = request.payload.riverDaysAfterJune



    // Save river
    //var river = JSON.parse(JSON.stringify(request.session)){
    var river = {
      currentRiver: {
        riverTown: request.session.riverTown,
        riverDaysBeforeJune: request.session.riverDaysBeforeJun,
        riverDaysAfterJune: request.session.riverDaysAfterJune
      }

  }
    rivers.push(river)




    if (request.payload.next === "Review") {
    return reply.redirect('review')
    //return reply(rivers)
  } else if (request.payload.next === "SmallSeaTrout") {
    return reply.redirect('add-small-sea-trout')
  } else {
    return reply.redirect('add-salmon-and-large-sea-trout')
  }

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

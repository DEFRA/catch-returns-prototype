const handlers = {
  get: function (request, reply) {
    return reply.view('add-river', {
      pageTitle: 'Please enter details for the river where you fished',
      errorMessage: 'Select a river',
      errorMessageTwo: 'Enter the nearest town',
      errorMessageThree: 'Enter the number of days you fished before 16th June',
      errorMessageFour: 'Enter the number of days you fished after 16th June',
      rivers: global.rivers,
      validMonths: global.validMonths
    })
  },
  post: function (request, reply) {
    request.session.riverName = request.payload.riverName
    request.session.riverTown = request.payload.riverTown
    request.session.riverDaysBeforeJune = request.payload.riverDaysBeforeJune
    request.session.riverDaysAfterJune = request.payload.riverDaysAfterJune


    // Add river
    global.rivers[request.session.riverName] = {
      riverName: request.session.riverName,
      riverTown: request.session.riverTown,
      riverDaysBeforeJune: request.session.riverDaysBeforeJune,
      riverDaysAfterJune: request.session.riverDaysAfterJune,
      bigFish: [
      ],
      smallFish: validMonths
    }




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

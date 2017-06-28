const handlers = {
  get: function (request, reply) {
    return reply.view('add-river', {
      pageTitle: 'Please enter details for the river where you fished',
      errorMessage: 'Select a river',
      errorMessageTwo: 'Enter the nearest town',
      errorMessageThree: 'Enter the number of days you fished before 16th June',
      errorMessageFour: 'Enter the number of days you fished after 16th June',
      rivers: global.rivers,
      validMonths: global.validMonths,
    })

  },
  post: function (request, reply) {
    request.session.riverName = request.payload.riverName
    request.session.riverTown = request.payload.riverTown
    request.session.riverDaysBeforeJune = request.payload.riverDaysBeforeJune
    request.session.riverDaysAfterJune = request.payload.riverDaysAfterJune



    if (request.session.licenceNumber === 'C7A722' || request.session.licenceNumber === 'C7A744') {
      // Add river
      global.rivers[request.session.riverName] = {
        riverName: request.session.riverName,
        riverTown: request.session.riverTown,
        riverDaysBeforeJune: request.session.riverDaysBeforeJune,
        riverDaysAfterJune: request.session.riverDaysAfterJune,
        bigFish: [
        ],
        smallFish: [
          { month: 'June 16', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
          { month: 'July 16', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
          { month: 'Augaust 16', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
          { month: 'Septembe 16', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
          { month: 'October 16', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
          { month: 'November 16', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
          { month: 'December 16', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
          { month: 'January 17', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
          { month: 'February 17', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
          { month: 'March 17', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
          { month: 'April 17', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
          { month: 'May 17', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
          { month: 'June 17', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
        ]
      }
    } else {
      // Add river
      global.rivers[request.session.riverName] = {
        riverName: request.session.riverName,
        riverTown: request.session.riverTown,
        riverDaysBeforeJune: request.session.riverDaysBeforeJune,
        riverDaysAfterJune: request.session.riverDaysAfterJune,
        bigFish: [
        ],
        smallFish: [
          { month: 'June 17', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, }
        ]
      }
    }

    riversCount += 1;

    if (request.payload.next === "Review") {
      return reply.redirect('review')
      //return reply(rivers)
    } else if (request.payload.next === "SmallSeaTrout") {
      return reply.redirect('add-small-sea-trout')
      //return reply(rivers)
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

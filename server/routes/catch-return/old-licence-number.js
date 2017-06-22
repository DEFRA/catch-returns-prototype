const handlers = {
  get: function (request, reply) {
    return reply.view('old-licence-number', {
      pageTitle: 'Enter your licence details',
      errorMessage: 'Enter a valid 9 digit licence number',
      errorMessageTwo: 'Enter a valid postcode',
    })
  },
  post: function (request, reply) {
    request.session.licenceNumber = request.payload.licenceNumber


    if (request.session.licenceNumber === '635342111') {
      request.session.licenceNumber = '635342111'
      request.session.startText = '2 April 2017'
      request.session.endText = '3 April 2017'

      // Rivers
      global.rivers = []


      // valid months
      // global.validMonths = [
      //   { month: 'June 17' }
      // ]

      // Small fish
      global.smallFish = [
       // { river: "Thames", month: "June 17", fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      ]

      // Big Fish
      global.bigFish = []

      return reply.redirect('have-you-fished')

    } else if (request.session.licenceNumber === '635342444') {
      request.session.licenceNumber = '635342444'
      request.session.startText = '2 June 2017'
      request.session.endText = '1 June 2018'

      // Rivers

      global.rivers = [
        {
          riverName: 'Thames',
          riverTown: 'London',
          riverDaysBeforeJune: 4,
          riverDaysAfterJune: 3,
        },
        {
          riverName: 'Weaver',
          riverTown: 'Northwich',
          riverDaysBeforeJune: 0,
          riverDaysAfterJune: 5,
        },
        {
          riverName: 'Avon',
          riverTown: 'Stratford',
          riverDaysBeforeJune: 2,
          riverDaysAfterJune: 3,
        }
      ]

      // valid months
      // global.validMonths = [
      //   { month: 'June 16' },
      //   { month: 'July 16' },
      //   { month: 'Augaust 16' },
      //   { month: 'Septembe 16' },
      //   { month: 'October 16' },
      //   { month: 'November 16' },
      //   { month: 'December 16' },
      //   { month: 'January 17' },
      //   { month: 'February 17' },
      //   { month: 'March 17' },
      //   { month: 'April 17' },
      //   { month: 'May 17' },
      //   { month: 'June 17' },
      // ]

      //Small fish
      global.smallFish = [
        { river: "Thames", month: "June 16", fly: 3, spinner: 0, bait: 2, total: 5, NumberOfFishReleased: 5, },
        { river: "Thames", month: "July 16", fly: 1, spinner: 0, bait: 2, total: 3, NumberOfFishReleased: 5, },
        { river: "Thames", month: "Augaust 16", fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
        { river: "Thames", month: "Septembe 16", fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
        { river: "Thames", month: "October 16", fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
        { river: "Thames", month: "November 16", fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
        { river: "Thames", month: "December 16", fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
        { river: "Thames", month: "January 17", fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
        { river: "Thames", month: "February 17", fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
        { river: "Thames", month: "March 17", fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
        { river: "Thames", month: "April 17", fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
        { river: "Thames", month: "May 17", fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
        { river: "Thames", month: "June 17", fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      ]

      // Big Fish
      global.bigFish = [
        { river: "Avon", date: "23/01/2017", typeOfFish: 'Salmon and grilse', weight: '2lb 2oz', method: 'fly', released: 'yes', },
        { river: "Avon", date: "16/02/2017", typeOfFish: 'Sea trout', weight: '4lb 4oz', method: 'spinner', released: 'No' },
        { river: "Weaver", date: "3/03/2017", typeOfFish: 'Salmon and grilse', weight: '2lb 2oz', method: 'fly', released: 'No', },
        { river: "Weaver", date: "15/14/2017", typeOfFish: 'Sea trout', weight: '4lb 4oz', method: 'spinner', released: 'yes', },
        { river: "Thames", date: "30/04/2017", typeOfFish: 'Salmon and grilse', weight: '2lb 2oz', method: 'fly', released: 'yes', },
      ]

      return reply.redirect('review')
    }
  }
}

module.exports = [{
  method: 'GET',
  path: '/catch-return/old-licence-number',
  config: {
    handler: handlers.get
  }
},
{
  method: 'POST',
  path: '/catch-return/old-licence-number',
  config: {
    handler: handlers.post
  }
}]

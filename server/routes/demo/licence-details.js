const handlers = {
  get: function (request, reply) {
    return reply.view('demo/licence-details', {
      pageTitle: 'Enter your licence details',
      errorMessage: 'Enter the last 6 digits of your licence number',
      errorMessageTwo: 'Enter a valid postcode',
    })
  },
  post: function (request, reply) {

    request.session.licenceNumber = request.payload.licenceNumber


    if (request.session.licenceNumber === 'C7A711') {
      request.session.startText = '2 April 2017'
      request.session.endText = '10 April 2017'
      request.session.licencelength = false

      global.rivers = {
      }

      riversCount = 0;

      // valid months
      // global.validMonths = [
      //   { month: 'June 17', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      //   { month: 'July 17', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, }
      // ]

      return reply.redirect('have-you-fished')

    } else if (request.session.licenceNumber === 'C7A722') {
      request.session.startText = '2 June 2017'
      request.session.endText = '3 June 2018'
      request.session.licencelength = true

      global.rivers = {}

      riversCount = 0;

      //valid months
      // global.validMonths = [
      //   { month: 'June 16', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      //   { month: 'July 16', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      //   { month: 'Augaust 16', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      //   { month: 'Septembe 16', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      //   { month: 'October 16', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      //   { month: 'November 16', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      //   { month: 'December 16', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      //   { month: 'January 17', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      //   { month: 'February 17', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      //   { month: 'March 17', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      //   { month: 'April 17', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      //   { month: 'May 17', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      //   { month: 'June 17', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      // ]

      return reply.redirect('have-you-fished')

    }


    else if (request.session.licenceNumber === 'C7A744') {
      request.session.startText = '2 June 2017'
      request.session.endText = '1 June 2018'
      request.session.licencelength = true

      global.rivers = {
        Thames: {
          riverName: 'Thames',
          riverTown: 'London',
          riverDaysBeforeJune: 4,
          riverDaysAfterJune: 3,
          bigFish: [
            { date: "23/01/2017", day: 23, month: 01, year: 2017, typeOfFish: 'Salmon and grilse', lb: 2 , oz: 2 ,weight: '2lb 2oz', MethodOfCapture: 'fly', released: 'Yes', },
            { date: "16/02/2017", day: 16, month: 02, year: 2017, typeOfFish: 'Sea trout', lb: 4 , oz: 4 , weight: '4lb 4oz', MethodOfCapture: 'spinner', released: 'No' },
          ],
          smallFish: [
            { month: 'June 17', fly: 2, spinner: 2, bait: 2, total: 6, NumberOfFishReleased: 4, },
            { month: 'July 17', fly: 3, spinner: 1, bait: 4, total: 8, NumberOfFishReleased: 6, }
          ]
        },
        Avon: {
          riverName: 'Avon',
          riverTown: 'Warrington',
          riverDaysBeforeJune: 12,
          riverDaysAfterJune: 13,
          bigFish: [
            { date: "15/04/2017", day: 15, month: 04, year: 2017, typeOfFish: 'Sea trout', lb: 4 , oz: 4 , weight: '4lb 4oz', MethodOfCapture: 'spinner', released: 'Yes', },
            { date: "30/04/2017", day: 30, month: 04, year: 2017, typeOfFish: 'Salmon and grilse', lb: 2 , oz: 2 , weight: '2lb 2oz', meMethodOfCapturethod: 'fly', released: 'Yes', },
            { date: "22/05/2017", day: 22, month: 05, year: 2017, typeOfFish: 'Salmon and grilse', lb: 4 , oz: 2 , weight: '4lb 2oz', MethodOfCapture: 'spinner', released: 'No', },
          ],
          smallFish: [
            { month: 'June 17', fly: 2, spinner: 2, bait: 2, total: 6, NumberOfFishReleased: 4, },
            { month: 'July 17', fly: 3, spinner: 1, bait: 4, total: 8, NumberOfFishReleased: 6, },
            { month: 'Septembe 16', fly: 2, spinner: 0, bait: 4, total: 6, NumberOfFishReleased: 2, },
            { month: 'April 17', fly: 4, spinner: 2, bait: 3, total: 9, NumberOfFishReleased: 5, },
          ]
        },
      }


      riversCount = 2;

      // valid months
      // global.validMonths = [
      //   { month: 'June 16', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      //   { month: 'July 16', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      //   { month: 'Augaust 16', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      //   { month: 'Septembe 16', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      //   { month: 'October 16', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      //   { month: 'November 16', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      //   { month: 'December 16', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      //   { month: 'January 17', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      //   { month: 'February 17', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      //   { month: 'March 17', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      //   { month: 'April 17', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      //   { month: 'May 17', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      //   { month: 'June 17', fly: 0, spinner: 0, bait: 0, total: 0, NumberOfFishReleased: 0, },
      // ]


      return reply.redirect('review')
    }

  }
}

module.exports = [{
  method: 'GET',
  path: '/demo/licence-details',
  config: {
    handler: handlers.get
  }
},
{
  method: 'POST',
  path: '/demo/licence-details',
  config: {
    handler: handlers.post
  }
}]

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
        request.session.holderName = 'John Smith'
        request.session.dateOfBirth = '1 July 1980'
        request.session.email = 'john.smith@email.com'
        request.session.mobile  = 07708123456
        request.session.Address = 'Flat 20A, Knutsford Road, Warrington WA4 1AB'
        request.session.licenceLength = '1 day'
        request.session.startText = '2 April 2017'
        request.session.endText = '3 April 2017'
        return reply.redirect('have-you-fished')
        
    } else if (request.session.licenceNumber === '635342222') {
        request.session.licenceNumber = '635342222'
        request.session.holderName = 'Fred Perry'
        request.session.dateOfBirth = '1 July 1980'
        request.session.email = 'fred.perry@email.com'
        request.session.mobile  = 07708123333
        request.session.Address = 'Flat 20A, Knutsford Road, Warrington WA4 1AB'
        request.session.licenceLength = '8 days'
        request.session.startText = '8 May 2017'
        request.session.endText = '16 May 2017'
        return reply.redirect('have-you-fished')

    } else if (request.session.licenceNumber === '635342333') {
        request.session.licenceNumber = '635342333'
        request.session.holderName = 'Tom jones'
        request.session.dateOfBirth = '1 July 1970'
        request.session.email = 'tom.jones@email.com'
        request.session.mobile  = 07708124444
        request.session.Address = 'Flat 20A, Knutsford Road, Warrington WA4 1AB'
        request.session.licenceLength = '12 months'
        request.session.startText = '2 June 2016'
        request.session.endText = '1 June 2017'
        return reply.redirect('have-you-fished')
    }

    if (request.session.licenceNumber === '635342444') {
      request.session.licenceNumber = '635342444'
      request.session.holderName = 'Tim Walker'
      request.session.dateOfBirth = '1 July 1970'
      request.session.email = 'tim.walker@email.com'
      request.session.mobile  = 07708124444
      request.session.Address = 'Flat 20A, Knutsford Road, Warrington WA4 1AB'
      request.session.licenceLength = '12 months'
      request.session.startText = '2 June 2017'
      request.session.endText = '1 June 2018'

      // Stored rivers
      global.rivers = [  
        {
          riverName: 'Thames',
          riverTown: 'London',
          riverDaysBeforeJune: 4,
          riverDaysAfterJune: 3,
          SmallSeaTrout: [
            { river:"Thames", month:"March", fly: 3, spinner: 3, bait: 2, NumberOfFishReleased: 5, },
            { river:"Thames", month:"April", fly: 1, spinner: 6, bait: 3, NumberOfFishReleased: 9, },
            { river:"Thames", month:"August", fly: 2, spinner: 0, bait: 4, NumberOfFishReleased: 0, }
          ], 
          SalmonAndLargeSeaTrout: [
            { river:"Thames", date:"23/09/2013", typeOfFish: 'Salmon and grilse', weight: '2lb 2oz', method:'fly', NumberOfFishReleased: 5, },
            { river:"Thames", date:"23/09/2013", typeOfFish: 'Sea trout', weight: '4lb 4oz', method:'spinner', NumberOfFishReleased: 5, },
          ], 
        },
        
         {
          riverName: 'Weaver',
          riverTown: 'Northwich',
          riverDaysBeforeJune: 0,
          riverDaysAfterJune: 5,
           SmallSeaTrout: [
            { river:"Weaver", month:"March", fly: 2, spinner: 0, bait: 8, NumberOfFishReleased: 6, }
          ], 
          SalmonAndLargeSeaTrout: [
            { river:"Weaver", date:"23/09/2013", typeOfFish: 'Salmon and grilse', weight: '2lb 2oz', method:'fly', NumberOfFishReleased: 5, },
            { river:"Weaver", date:"23/09/2013", typeOfFish: 'Sea trout', weight: '4lb 4oz', method:'spinner', NumberOfFishReleased: 5, },
          ], 
        },
        {
          riverName: 'Avon', 
          riverTown: 'Stratford',
          riverDaysBeforeJune: 2,
          riverDaysAfterJune: 3,
           SmallSeaTrout: [
            { river:"Avon", month:"August", fly: 7, spinner: 1, bait: 3, NumberOfFishReleased: 3, }
          ], 
          SalmonAndLargeSeaTrout: [
            { river:"Avon", date:"23/09/2013", typeOfFish: 'Salmon and grilse', weight: '2lb 2oz', method:'fly', NumberOfFishReleased: 5, },
            { river:"Avon", date:"23/09/2013", typeOfFish: 'Sea trout', weight: '4lb 4oz', method:'spinner', NumberOfFishReleased: 5, },
          ], 
        }
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

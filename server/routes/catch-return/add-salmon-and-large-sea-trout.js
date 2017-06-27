const handlers = {
  get: function (request, reply) {
    return reply.view('add-salmon-and-large-sea-trout', {
      //pageTitle: 'Please enter details for the river where you fished',
      errorMessage: 'Enter the date of the catch',
      errorMessageTwo: 'Enter the type of the catch',
      errorMessageThree: 'Enter the weight of the catch',
      errorMessageFour: 'Enter the method of capture',
      errorMessageFive: 'Tell us if the catch was released',
      riverName: request.session.riverName,
      licencelength: request.session.licencelength,
      rivers: global.rivers,
      validMonths: global.validMonths
    })
  },
  post: function (request, reply) {
    request.session.day = request.payload.day
    request.session.month = request.payload.month
    request.session.year = request.payload.year
    request.session.date = request.payload.day + '/' + request.payload.month + '/' + request.payload.year
    request.session.bait = request.payload.bait
    request.session.typeOfFish = request.payload.fishType
    request.session.lb = request.payload.lb
    request.session.oz = request.payload.oz
    request.session.weight = request.payload.lb + 'lb ' + request.payload.oz + 'oz'
    request.session.MethodOfCapture = request.payload.MethodOfCapture
    request.session.released = request.payload.released

    // Save big fish
    var big = {
      day: request.session.day,
      month: request.session.month,
      year: request.session.year,
      date: request.session.date,
      bait: request.payload.bait,
      typeOfFish: request.session.typeOfFish,
      lb: request.session.lb,
      oz: request.session.oz,
      weight: request.session.weight,
      MethodOfCapture: request.session.MethodOfCapture,
      released: request.session.released
    }

    global.rivers[request.session.riverName].bigFish.push(big)





    if (request.payload.next === "Review") {
      return reply.redirect('review')
      //return reply(rivers)
    } else {
      return reply.redirect('add-salmon-and-large-sea-trout')
      //return reply(rivers)
    }


  }
}


module.exports = [{
  method: 'GET',
  path: '/catch-return/add-salmon-and-large-sea-trout',
  config: {
    handler: handlers.get
  }
},
{
  method: 'POST',
  path: '/catch-return/add-salmon-and-large-sea-trout',
  config: {
    handler: handlers.post
  }
}]

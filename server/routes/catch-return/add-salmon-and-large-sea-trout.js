const handlers = {
  get: function (request, reply) {
    return reply.view('add-salmon-and-large-sea-trout', {
      //pageTitle: 'Please enter details for the river where you fished',
      errorMessage: '',
      errorMessageTwo: '',
      errorMessageThree: '',
      errorMessageFour: '',
      errorMessageFive: '',
      riverName: request.session.riverName,
      rivers: global.rivers,
      licencelength: request.session.licencelength
    })
  },
  post: function (request, reply) {
    request.session.river = request.session.riverName
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
    var big = JSON.parse(JSON.stringify(request.session))
    global.bigFish.push(big)

    if (request.payload.next === "Review") {
      return reply.redirect('review')
    } else {
      return reply.redirect('add-salmon-and-large-sea-trout')
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

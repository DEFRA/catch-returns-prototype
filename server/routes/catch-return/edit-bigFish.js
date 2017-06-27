const handlers = {
  get: function (request, reply) {
    return reply.view('edit-bigFish', {
      //pageTitle: 'Please enter details for the river where you fished',
      //errorMessage: 'Enter the date of the catch',
      riverName: request.session.riverName,
      licencelength: request.session.licencelength,
      rivers: global.rivers,
      validMonths: global.validMonths,
      currentFish: global.rivers[request.query.a].bigFish[Number(request.query.b)],
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
    // var big = {
    //   riverName: request.session.riverName,
    //   date: request.session.date,
    //   bait: request.payload.bait,
    //   typeOfFish: request.session.typeOfFish,
    //   weight: request.session.weight,
    //   MethodOfCapture: request.session.MethodOfCapture,
    //   released: request.session.released
    // }
    
    // global.rivers[request.session.riverName].bigFish.push(big)


    global.rivers[request.query.a].bigFish[Number(request.query.b)].riverName = request.session.riverName
    global.rivers[request.query.a].bigFish[Number(request.query.b)].date = request.session.date
    global.rivers[request.query.a].bigFish[Number(request.query.b)].bait = request.session.bait
    global.rivers[request.query.a].bigFish[Number(request.query.b)].typeOfFish = request.session.typeOfFish
    global.rivers[request.query.a].bigFish[Number(request.query.b)].weight = request.session.weight
    global.rivers[request.query.a].bigFish[Number(request.query.b)].MethodOfCapture = request.session.MethodOfCapture
    global.rivers[request.query.a].bigFish[Number(request.query.b)].released = request.session.released


    
    return reply.redirect('review')
   

  }
}


module.exports = [{
  method: 'GET',
  path: '/catch-return/edit-bigFish',
  config: {
    handler: handlers.get
  }
},
{
  method: 'POST',
  path: '/catch-return/edit-bigFish',
  config: {
    handler: handlers.post
  }
}]

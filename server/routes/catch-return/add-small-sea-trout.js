const handlers = {
  get: function (request, reply) {
    return reply.view('add-small-sea-trout', {
      //pageTitle: 'Please enter details for the river where you fished',
      //errorMessage: '',
      riverName: request.session.riverName,
      validMonths: global.validMonths,
      rivers: global.rivers,
    })
  },
  post: function (request, reply) {
    request.session.river = request.session.riverName
    request.session.month = request.session.month
    request.session.fly = request.payload.fly
    request.session.spinner = request.payload.spinner
    request.session.bait = request.payload.bait
    request.session.NumberOfFishReleased = request.payload.NumberOfFishReleased

    request.session.NumberOfFishCaught = request.session.fly + request.session.spinner + request.session.bait

   

    //if (request.session.NumberOfFishCaught > 0) {
      // Save small fish
      var small = JSON.parse(JSON.stringify(request.session))
      global.smallFish.push(small)
    //}


    if (request.payload.next === "Review") {
      return reply.redirect('review')
    } else {
      return reply.redirect('add-salmon-and-large-sea-trout')
    }


  }
}


module.exports = [{
  method: 'GET',
  path: '/catch-return/add-small-sea-trout',
  config: {
    handler: handlers.get
  }
},
{
  method: 'POST',
  path: '/catch-return/add-small-sea-trout',
  config: {
    handler: handlers.post
  }
}]

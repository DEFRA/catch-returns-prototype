const handlers = {
  get: function (request, reply) {
    return reply.view('add-small-sea-trout', {
      //pageTitle: 'Please enter details for the river where you fished',
      //errorMessage: '',
      riverName: request.session.riverName,
      smallFish: global.smallFish,
      rivers: global.rivers,
      smallFish: global.smallFish,
      smallFishCount: global.smallFish.length,

      // Return users
      month: request.session.month,
      fly: request.session.fly,
      spinner: request.session.spinner,
      total: request.session.total,
      NumberOfFishReleased: request.session.NumberOfFishReleased
    })
  },
  post: function (request, reply) {

    // for (i = 0; i < global.smallFish.length; i++) {
      
      request.session.river = request.session.riverName
      request.session.month = request.payload.month
      request.session.fly = request.payload.fly
      request.session.spinner = request.payload.spinner
      request.session.bait = request.payload.bait
      request.session.total = Number(request.payload.fly) + Number(request.payload.spinner) + Number(request.payload.bait)
      request.session.NumberOfFishReleased = request.payload.NumberOfFishReleased

      var small = JSON.parse(JSON.stringify(request.session))
      
      global.smallFish.push(small)
      //global.smallFish[i] = small

    // }



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

const handlers = {
  get: function (request, reply) {
    return reply.view('add-small-sea-trout', {
      //pageTitle: 'Please enter details for the river where you fished',
      //errorMessage: '',
      currentRiver: request.session.riverName,
      rivers: global.rivers,
      validMonths: global.validMonths,
      littleFish: global.rivers[request.session.riverName].smallFish
    })
  },
  post: function (request, reply) {
      request.session.month0 = request.payload.month0
      request.session.fly0 = request.payload.fly0
      request.session.spinner0 = request.payload.spinner0
      request.session.bait0 = request.payload.bait0
      request.session.total0 = Number(request.payload.fly0) + Number(request.payload.spinner0) + Number(request.payload.bait0)
      request.session.NumberOfFishReleased0 = request.payload.NumberOfFishReleased0

      request.session.month1 = request.payload.month1
      request.session.fly1 = request.payload.fly1
      request.session.spinner1 = request.payload.spinner1
      request.session.bait1 = request.payload.bait1
      request.session.total1 = Number(request.payload.fly1) + Number(request.payload.spinner1) + Number(request.payload.bait1)
      request.session.NumberOfFishReleased1 = request.payload.NumberOfFishReleased1
   

// Save small fish
    var small0 = {
      riverName: request.session.riverName,
      month0: request.session.month0,
      fly0: request.session.fly0,
      spinner0: request.payload.spinner0,
      bait0: request.session.bait0,
      total0: request.session.total0,
      NumberOfFishReleased0: request.session.NumberOfFishReleased0,
    }

    var small1 = {
      riverName: request.session.riverName,
      month1: request.session.month1,
      fly1: request.session.fly1,
      spinner1: request.payload.spinner1,
      bait1: request.session.bait1,
      total1: request.session.total1,
      NumberOfFishReleased1: request.session.NumberOfFishReleased1,
    }

    
    global.rivers[request.session.riverName].smallFish =  [
      {small0},
      {small1}
    ]
    
    

    if (request.payload.next === "Review") {
      return reply.redirect('review')
      //return reply(global.rivers[request.session.riverName].bigFish)
    } else {
      return reply.redirect('add-salmon-and-large-sea-trout')
      //return reply(global.smallFish)
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

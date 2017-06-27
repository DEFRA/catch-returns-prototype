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
    // request.session.month0 = request.payload.month0
    // request.session.fly0 = request.payload.fly0
    // request.session.spinner0 = request.payload.spinner0
    // request.session.bait0 = request.payload.bait0
    // request.session.total0 = Number(request.payload.fly0) + Number(request.payload.spinner0) + Number(request.payload.bait0)
    // request.session.NumberOfFishReleased0 = request.payload.NumberOfFishReleased0

    // request.session.month1 = request.payload.month1
    // request.session.fly1 = request.payload.fly1
    // request.session.spinner1 = request.payload.spinner1
    // request.session.bait1 = request.payload.bait1
    // request.session.total1 = Number(request.payload.fly1) + Number(request.payload.spinner1) + Number(request.payload.bait1)
    // request.session.NumberOfFishReleased1 = request.payload.NumberOfFishReleased1

    for (var i = 0; i < 2; i += 1) {
      request.session.month[i] = request.payload.month[i]
      request.session.fly[i] = request.payload.fly[i]
      request.session.spinner[i] = request.payload.spinner[i]
      request.session.bait[i] = request.payload.bait[i]
      request.session.total[i] = Number(request.payload.fly[i]) + Number(request.payload.spinner[i]) + Number(request.payload.bait[i])
      request.session.NumberOfFishReleased[i] = request.payload.NumberOfFishReleased[i]
    }


    for (var i = 0; i < 2; i += 1) {
      global.rivers[request.session.riverName].smallFish =
        {
          //riverName: request.session.riverName,
          month: request.session.month,
          fly: request.session.fly,
          spinner: request.payload.spinner,
          bait: request.session.bait,
          total: request.session.total,
          NumberOfFishReleased: request.session.NumberOfFishReleased,
        }
    }






    if (request.payload.next === "Review") {
      //return reply.redirect('review')
      return reply(rivers)
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

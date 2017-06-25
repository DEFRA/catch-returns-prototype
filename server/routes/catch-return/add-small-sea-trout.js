const handlers = {
  get: function (request, reply) {
    return reply.view('add-small-sea-trout', {
      //pageTitle: 'Please enter details for the river where you fished',
      //errorMessage: '',
      riverName: request.session.riverName,
      rivers: global.rivers,
      smallFish: global.smallFish,
      smallFishCount: global.smallFish.length,
      validMonths: global.validMonths,
      validMonthsCount: global.validMonths.length,

      // Return users
      // month: request.session.month,
      // fly: request.session.fly,
      // spinner: request.session.spinner,
      // total: request.session.total,
      // NumberOfFishReleased: request.session.NumberOfFishReleased
    })
  },
  post: function (request, reply) {

    currentRiver = request.session.riverName
    request.session.month = request.payload.month
    request.session.fly = request.payload.fly
    request.session.spinner = request.payload.spinner
    request.session.bait = request.payload.bait
    request.session.total = Number(request.payload.fly) + Number(request.payload.spinner) + Number(request.payload.bait)
    request.session.NumberOfFishReleased = request.payload.NumberOfFishReleased


    if (global.smallFish.includes(currentRiver)) {
      // Update values fpor existing river
      //global.smallFish.currentRiver = { month: month, fly: fly, spinner: spinner, bait: bait, total: total, NumberOfFishReleased: NumberOfFishReleased, }
    } else {
      // Push new river
      //currentRiver = currentRiver: [month: 'month', fly: 'fly', spinner: 'spinner', bait: 'bait', total: 'total', NumberOfFishReleased: 'NumberOfFishReleased', ]
      global.smallFish.push(currentRiver)   
    }

    //global.smallFish.currentRiver.push(request.session.month)

    //global.smallFish.currentRiver.push({ month: arr.length + 1, fly: fly, spinner: spinner, bait: bait, total: total, NumberOfFishReleased: NumberOfFishReleased, });

    // Save river in small fish
    // var smallFishRiver = request.session.riverName
    // global.smallFish.push(smallFishRiver)











    if (request.payload.next === "Review") {
      return reply.redirect('review')
      //return reply(global.smallFish)
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

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


    var small0 = {
      month: request.payload.month0,
      fly: request.payload.fly0,
      spinner: request.payload.spinner0,
      bait: request.payload.bait0,
      total: Number(request.payload.fly0) + Number(request.payload.spinner0) + Number(request.payload.bait0),
      NumberOfFishReleased: request.payload.NumberOfFishReleased0,
    }

    if (request.session.licenceNumber === 'C7A722' || request.session.licenceNumber === 'C7A744') {

      var small1 = {
        month: request.payload.month1,
        fly: request.payload.fly1,
        spinner: request.payload.spinner1,
        bait: request.payload.bait1,
        total: Number(request.payload.fly1) + Number(request.payload.spinner1) + Number(request.payload.bait1),
        NumberOfFishReleased: request.payload.NumberOfFishReleased1
      }

      var small2 = {
        month: request.payload.month2,
        fly: request.payload.fly2,
        spinner: request.payload.spinner2,
        bait: request.payload.bait2,
        total: Number(request.payload.fly2) + Number(request.payload.spinner2) + Number(request.payload.bait2),
        NumberOfFishReleased: request.payload.NumberOfFishReleased2
      }

      var small3 = {
        month: request.payload.month3,
        fly: request.payload.fly3,
        spinner: request.payload.spinner3,
        bait: request.payload.bait3,
        total: Number(request.payload.fly3) + Number(request.payload.spinner3) + Number(request.payload.bait3),
        NumberOfFishReleased: request.payload.NumberOfFishReleased3
      }

      var small4 = {
        month: request.payload.month4,
        fly: request.payload.fly4,
        spinner: request.payload.spinner4,
        bait: request.payload.bait4,
        total: Number(request.payload.fly4) + Number(request.payload.spinner4) + Number(request.payload.bait4),
        NumberOfFishReleased: request.payload.NumberOfFishReleased4
      }

      var small5 = {
        month: request.payload.month5,
        fly: request.payload.fly5,
        spinner: request.payload.spinner5,
        bait: request.payload.bait5,
        total: Number(request.payload.fly5) + Number(request.payload.spinner5) + Number(request.payload.bait5),
        NumberOfFishReleased: request.payload.NumberOfFishReleased5
      }

      var small6 = {
        month: request.payload.month6,
        fly: request.payload.fly6,
        spinner: request.payload.spinner6,
        bait: request.payload.bait6,
        total: Number(request.payload.fly6) + Number(request.payload.spinner6) + Number(request.payload.bait6),
        NumberOfFishReleased: request.payload.NumberOfFishReleased6
      }

      var small7 = {
        month: request.payload.month7,
        fly: request.payload.fly7,
        spinner: request.payload.spinner7,
        bait: request.payload.bait7,
        total: Number(request.payload.fly7) + Number(request.payload.spinner7) + Number(request.payload.bait7),
        NumberOfFishReleased: request.payload.NumberOfFishReleased7
      }

      var small8 = {
        month: request.payload.month8,
        fly: request.payload.fly8,
        spinner: request.payload.spinner8,
        bait: request.payload.bait8,
        total: Number(request.payload.fly8) + Number(request.payload.spinner8) + Number(request.payload.bait8),
        NumberOfFishReleased: request.payload.NumberOfFishReleased8
      }

      var small9 = {
        month: request.payload.month9,
        fly: request.payload.fly9,
        spinner: request.payload.spinner9,
        bait: request.payload.bait9,
        total: Number(request.payload.fly9) + Number(request.payload.spinner9) + Number(request.payload.bait9),
        NumberOfFishReleased: request.payload.NumberOfFishReleased9
      }

      var small10 = {
        month: request.payload.month10,
        fly: request.payload.fly10,
        spinner: request.payload.spinner10,
        bait: request.payload.bait10,
        total: Number(request.payload.fly10) + Number(request.payload.spinner10) + Number(request.payload.bait10),
        NumberOfFishReleased: request.payload.NumberOfFishReleased10
      }

      var small11 = {
        month: request.payload.month11,
        fly: request.payload.fly11,
        spinner: request.payload.spinner11,
        bait: request.payload.bait11,
        total: Number(request.payload.fly11) + Number(request.payload.spinner11) + Number(request.payload.bait11),
        NumberOfFishReleased: request.payload.NumberOfFishReleased11
      }

      var small12 = {
        month: request.payload.month12,
        fly: request.payload.fly12,
        spinner: request.payload.spinner12,
        bait: request.payload.bait12,
        total: Number(request.payload.fly12) + Number(request.payload.spinner12) + Number(request.payload.bait12),
        NumberOfFishReleased: request.payload.NumberOfFishReleased12
      }

    }

    global.rivers[request.session.riverName].smallFish[0] = small0

    if (request.session.licenceNumber === 'C7A722' || request.session.licenceNumber === 'C7A744') {
      global.rivers[request.session.riverName].smallFish[1] = small1
      global.rivers[request.session.riverName].smallFish[2] = small2
      global.rivers[request.session.riverName].smallFish[3] = small3
      global.rivers[request.session.riverName].smallFish[4] = small4
      global.rivers[request.session.riverName].smallFish[5] = small5
      global.rivers[request.session.riverName].smallFish[6] = small6
      global.rivers[request.session.riverName].smallFish[7] = small7
      global.rivers[request.session.riverName].smallFish[8] = small8
      global.rivers[request.session.riverName].smallFish[9] = small9
      global.rivers[request.session.riverName].smallFish[10] = small10
      global.rivers[request.session.riverName].smallFish[11] = small11
      global.rivers[request.session.riverName].smallFish[12] = small12
    }


    if (request.payload.next === "Review") {
      return reply.redirect('review')
      //return reply(global.rivers[request.session.riverName])
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

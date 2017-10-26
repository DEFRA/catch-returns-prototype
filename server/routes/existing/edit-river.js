const handlers = {
  get: function (request, reply) {
    return reply.view('existing/edit-river', {
      pageTitle: 'Please enter details for the river where you fished',
      rivers: global.rivers,
      validMonths: global.validMonths,
      currentRiver: global.rivers[request.query.editUrl],
    })
  },
  post: function (request, reply) {
    request.session.riverName = request.payload.riverName
    request.session.riverTown = request.payload.riverTown
    request.session.riverDaysBeforeJune = request.payload.riverDaysBeforeJune
    request.session.riverDaysAfterJune = request.payload.riverDaysAfterJune

    // Edit river
    global.rivers[request.query.editUrl].riverName = request.session.riverName
    global.rivers[request.query.editUrl].riverTown = request.session.riverTown
    global.rivers[request.query.editUrl].riverDaysBeforeJune = request.session.riverDaysBeforeJune
    global.rivers[request.query.editUrl].riverDaysAfterJune = request.session.riverDaysAfterJune


    return reply.redirect('review')
    //return reply(rivers)

  }
}


module.exports = [{
  method: 'GET',
  path: '/existing/edit-river',
  config: {
    handler: handlers.get
  }
},
{
  method: 'POST',
  path: '/existing/edit-river',
  config: {
    handler: handlers.post
  }
}]

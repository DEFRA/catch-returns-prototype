const handlers = {
  get: function (request, reply) {
    return reply.view('edit-river', {
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
    global.rivers[request.query.editUrl].riverTown = request.session.riverTown
    global.rivers[request.query.editUrl].riverDaysBeforeJune = request.session.riverDaysBeforeJune
    global.rivers[request.query.editUrl].riverDaysAfterJune = request.session.riverDaysAfterJune



    if (request.payload.next === "Review") {
      return reply.redirect('review')
      //return reply(rivers)
    } else if (request.payload.next === "SmallSeaTrout") {
      return reply.redirect('add-small-sea-trout')
    } else {
      return reply.redirect('add-salmon-and-large-sea-trout')
    }

  }
}


module.exports = [{
  method: 'GET',
  path: '/catch-return/edit-river',
  config: {
    handler: handlers.get
  }
},
{
  method: 'POST',
  path: '/catch-return/edit-river',
  config: {
    handler: handlers.post
  }
}]

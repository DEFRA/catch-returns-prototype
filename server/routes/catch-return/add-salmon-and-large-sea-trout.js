const handlers = {
  get: function (request, reply) {
    return reply.view('add-salmon-and-large-sea-trout', {
      //pageTitle: 'Please enter details for the river where you fished',
      errorMessage: '',
      errorMessageTwo: '',
      errorMessageThree: '',
      errorMessageFour: '',
      errorMessageFive: '',
    })
  },
  post: function (request, reply) {
    // Save details
    return reply.redirect('review')
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

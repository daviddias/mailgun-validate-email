var request = require('request')
  , inspect = require('util').inspect

var validator = function (email, cb) {  
  var options = {
      url: 'https://api.mailgun.net/v2/address/validate'
    , method: 'GET'
    , qs: {address: email}
    , auth: {
          username: "api"
        , password: "pubkey-5ogiflzbnjrljiky49qxsiozqef5jxp7"
      }
  }
  request(options, function (err, result){
    cb(err, result.request.response.body)    
  })
}
module.exports = validator




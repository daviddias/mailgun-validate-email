var request = require('request')

var validator = function (email, cb) {  
  var options = {
      url: 'https://api.mailgun.net/v2/address/validate'
    , method: 'GET'
    , qs: {address: email}//, syntax_only: true}
    , auth: {
          username: "api"
        , password: "pubkey-5ogiflzbnjrljiky49qxsiozqef5jxp7"
      }
  }
  request(options, function (err, result){
    if(err) {cb(err)}
    //this body is not a real JSON object  
    if(result.request.response.body.split(":")[1].split(",")[0].replace(" ","") === 'false'){
      cb(err, false)    
    } else {cb(err, true)}  
  })
}

module.exports = validator




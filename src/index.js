var request = require('request')

module.exports = function (apiKey) {
  return function validator (email, cb) {
    var options = {
      url: 'https://api.mailgun.net/v2/address/validate',
      method: 'GET',
      qs: {
        address: email
      },
      auth: {
        username: 'api',
        password: apiKey
      }
    }
    request(options, function (err, result) {
      if (err) {
        return cb(err)
      }
      cb(null, JSON.parse(result.request.response.body))
    })
  }
}

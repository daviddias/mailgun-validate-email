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
    request(options, function (err, res) {
      if (err) {
        return cb(err)
      }
      try {
        var result = JSON.parse(res.request.response.body)
        cb(null, result)
      } catch (err) {
        cb(err)
      }
    })
  }
}

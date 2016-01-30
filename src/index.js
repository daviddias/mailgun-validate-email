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
      if (res.request.response.body.length === 0) {
        return cb(new Error('mailgun replied with empty body'))
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

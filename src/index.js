var request = require('request');

module.exports = function (apiKey) {
  return function validator (email, cb) {
    var options = {
      url: 'https://api.mailgun.net/v3/address/validate',
      method: 'GET',
      timeout: 1500,
      qs: {
        address: email || ''
      },
      auth: {
        username: 'api',
        password: apiKey || ''
      }
    }
    request(options, function (err, res, body) {
      if (err) {
        return cb(err)
      }
      if (body.length == 0 || res.statusCode !== 200) {
        return cb(new Error('mailgun replied with empty body'))
      }
      try {
        return cb(null, JSON.parse(body))
      } catch (_err) {
        return cb(_err)
      }
    })
  }
}

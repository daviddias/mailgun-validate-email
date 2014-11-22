var request = require('request');

module.exports = function validator(email, cb) {
  var options = {
    url: 'https://api.mailgun.net/v2/address/validate',
    method: 'GET',
    qs: {
      address: email
    },
    auth: {
      username: 'api',
      password: 'pubkey-5ogiflzbnjrljiky49qxsiozqef5jxp7'
    }
  };
  request(options, function(err, result) {
    if (err) {
      return cb(err);
    }
    cb(null, JSON.parse(result.request.response.body));
  });
};

var Lab = require('lab')
var Code = require('code')
var lab = exports.lab = Lab.script()

var experiment = lab.experiment
var test = lab.test
var before = lab.before
var after = lab.after
var expect = Code.expect
var apiKey = 'pubkey-5ogiflzbnjrljiky49qxsiozqef5jxp7'
var validator = require('./../src/index.js')(apiKey)

experiment(': ', function () {
  before(function (done) {
    done()
  })

  after(function (done) {
    done()
  })

  test('valid email', function (done) {
    validator('banana@papaia.com', function (err, result) {
      expect(err).to.not.exist
      expect(result.is_valid).to.equal(true)
      done()
    })
  })

  test('non valid email', function (done) {
    validator('baasanana@psadasdasapaia.comasdasdas', function (err, result) {
      expect(err).to.not.exist
      expect(result.is_valid).to.equal(false)
      done()
    })
  })
})

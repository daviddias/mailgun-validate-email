var Lab = require('lab');
var Code = require('code');
var lab = exports.lab = Lab.script();

var experiment = lab.experiment;
var test = lab.test;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

var validator = require('./../src/index.js');

experiment(': ', function() {

  before(function(done) {
    done();
  });

  after(function(done) {
    done();
  });

  test('valid email', function(done) {
    validator('banana@papaia.com', function(err, result) {
      expect(result.is_valid).to.equal(true); //jscs:disable
      done();                                 //jscs:enable
    });
  });

  test('non valid email', function(done) {
    validator('baasanana@psadasdasapaia.comasdasdas', function(err, result) {
      expect(result.is_valid).to.equal(false); //jscs:disable
      done();                                  //jscs:enable
    });
  });
});

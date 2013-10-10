var info = require('./');

var assert = require('assert');

describe('info', function () {
    var app = function (endpoint, done) {
        return {
            get: function (endpoint_, method) {
                assert.equal(endpoint, endpoint_);
                var sender = {
                    send: function (data) {
                        assert.deepEqual(data, require('./package'));
                        done();
                    }
                };
                method(null, sender);
            }
        };
    };

    it('default endpoint /info', function (done) {
        info(app('/info', done));
    });

    it('custom endpoint /info', function (done) {
        info(app('/app/info', done), '/app/info');
    });
});

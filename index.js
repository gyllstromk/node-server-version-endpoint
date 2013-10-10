var path = require('path');

module.exports = function (app, endpoint) {
    app.get(endpoint || '/info', function (req, res) {
        res.send(require(path.resolve(process.cwd(), './package')));
    });
};

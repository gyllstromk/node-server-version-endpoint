module.exports = function (app, endpoint) {
    app.get(endpoint || '/info', function (req, res) {
        res.send(require('./package'));
    });
};

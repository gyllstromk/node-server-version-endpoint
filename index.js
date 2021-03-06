var git = require('git-node');

var path = require('path');

module.exports = function (app, endpoint) {
    var resolve = function (fileName) {
        return path.resolve(process.cwd(), fileName);
    };

    app.get(endpoint || '/info', function (req, res) {
        res.send(require(resolve('./package')));
    });

    app.get('/version', function (req, res) {
        var repo = git.repo(resolve('.git'));

        repo.load('HEAD', function (err, commit) {
            if (err) {
                return res.send(500, 'could not lookup repo for server');
            }

            res.send(commit.body);
        });
    });
};

# Package info endpoint

Adds `/info` (or custom) endpoint which returns the server's `package.json` content.

Usage:

```
var app = express() // or restify.createServer(), etc;

require('node-server-version-endpoint')(app);
```

Checking:

    curl -XGET http://<server>/info
    < ... contents of package.json >

(function () {
    'use strict';

    var restify = require('restify');

    var server = restify.createServer();

    server.get(/\/*/, restify.serveStatic({
        directory: './public/app',
        default: 'index.html'
    }));

    server.listen(8080, function () {
        console.log('Server running on 8080');
    });

})();
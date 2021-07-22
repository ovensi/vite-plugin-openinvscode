"use strict";
exports.__esModule = true;
var qs_1 = require("qs");
var path_1 = require("path");
var child_process_1 = require("child_process");
var openInVscode = function () { return ({
    name: 'configure-server',
    configureServer: function (server) {
        server.middlewares.use(function (req, res, next) {
            // http://localhost:3000/__open-in-editor?file=router/index.tsx:29
            var reg = /^\/__open-in-editor\?.*$/;
            if (reg.test(req.url)) {
                var query = qs_1.parse(req._parsedUrl.query);
                var filename = query.file;
                var filepath = path_1.resolve(__dirname, 'src', filename);
                console.log(filepath);
                child_process_1.spawn('code', ['-g', filepath]);
            }
            next();
        });
    }
}); };
exports["default"] = openInVscode;

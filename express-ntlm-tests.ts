/// <reference path="./typings/index.d.ts" />
/// <reference path="express-ntlm.d.ts" />

import express = require('express');
import http = require('http');
import ntlm = require('express-ntlm');

var app = express(),
    server = http.createServer(app),
    port = process.env.port || 8080;

app.use(ntlm());

app.get('/', function (req: ntlm.Request, res: express.Response) {
    res.end(JSON.stringify(req.ntlm));
});

server.listen(port);
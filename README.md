# express-ntlm-dt
The definitely Typed typedefs for typescript

Here is how to use it from a typescript file.
---------------------------------------------------


import express = require('express');
import ntlm = require('express-ntlm');

var app = express();
app.use(ntlm());

app.get('/', (req: ntlm.Request, res: express.Response) => {
res.end(JSON.stringify(req.ntlm));
});


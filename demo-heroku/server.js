const express = require('express')
const app = express()
const port = process.env.PORT || 8080

require('./lib/route')(app);

// start server
app.listen(port, () => {
    console.log(`Express server listening on ${port}`);
});
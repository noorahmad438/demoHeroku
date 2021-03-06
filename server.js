const express = require('express')
const app = express()
const port = process.env.PORT || 8080

require('./demo-heroku/lib/route')(app);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
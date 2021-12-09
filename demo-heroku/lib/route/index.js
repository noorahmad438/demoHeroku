const v1Route = require('../module/v1/route');

module.exports = function(app) {

    // Attach V1 Routes
    app.use('/', v1Route);
}
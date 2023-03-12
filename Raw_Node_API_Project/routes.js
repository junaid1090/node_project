/*
 * Title: Routes
 * Description: Application Routes
 * Date: 26/02/2023
 *
 */

// dependencies
const { simpleHandler } = require('./handlers/routeHandlers/sampleHandlers');
const { userHandler } = require('./handlers/routeHandlers/userHandler');

const routes = {
    sample: simpleHandler,
    user: userHandler,
};

module.exports = routes;

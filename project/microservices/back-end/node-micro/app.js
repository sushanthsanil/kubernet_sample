'use strict';

var SwaggerExpress = require('swagger-express-mw');
var swaggerTools = require('swagger-tools');
var fs = require('fs');
var path = require('path');
var app = require('express')();
var jsyaml = require('js-yaml');
var spec = fs.readFileSync(path.join(__dirname,'api/swagger/swagger.yaml'), 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

var config = require('../common/env-config/config');
module.exports = app; // for testing
var options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, 'api/controllers'),
  useStubs: true // Conditionally turn on stubs (mock mode)
};

var config = {
  appRoot: __dirname // required config
};

var logger = require("../common/utils/logger");
logger.debug("Overriding 'Express' logger");

app.use(require('morgan')({ "stream": logger.stream }));

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  //swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Validate Swagger requests
    app.use(middleware.swaggerValidator());

    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter(options));

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi());

  app.listen(port);
});

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
  if (swaggerExpress.runner.swagger.paths['/register']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/register?name=Scott');
  }
});

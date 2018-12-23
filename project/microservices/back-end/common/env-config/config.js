var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test' || env === 'staging' || env === 'production') {
  var config = require('./config_var.js');
  var envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });

}

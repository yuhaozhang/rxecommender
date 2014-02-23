var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'rxecommender'
    },
    port: 3000,
    db: 'mongodb://localhost/rxecommender-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'rxecommender'
    },
    port: 3000,
    db: 'mongodb://localhost/rxecommender-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'rxecommender'
    },
    port: 3000,
    db: 'mongodb://localhost/rxecommender-production'
  }
};

module.exports = config[env];

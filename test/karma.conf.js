'use strict';

const istanbul = require('browserify-istanbul');

const karmaBaseConfig = {
  basePath: '../',

  frameworks: ['jasmine', 'browserify'],

  preprocessors: {
    'test/unit/**/*.spec.js': ['babel'],
    'app/js/**/*.js': ['browserify']
  },

  browsers: ['Chrome'],

  reporters: ['mocha', 'coverage'],

  browserify: {
    debug: true,
    transform: [
      ['babelify', { compact: false }],
      'browserify-shim',
      'aliasify',
      'bulkify',
      'browserify-ngannotate',
      istanbul({
        ignore: ['**/js/vendor/**'],
        defaultIgnore: true,
        instrumenterConfig: { embedSource: true } // Workaround for HTML coverage reporter
      }),
    ]
  },

  files: [
    'app/js/index.js',
    './node_modules/angular-mocks/angular-mocks.js',
    'test/unit/**/*.spec.js'
  ],

  coverageReporter: {
    dir: 'reports/coverage',
    reporters: [{
        type: 'html',
        subdir: 'html'
      }, {
        type: 'text'
      }, {
        type: 'text-summary'
      }
    ]
  }
};

const ciAdditions = {
  browsers: ['Firefox']
};

module.exports = function (config) {
  const isCI = process.env.CI;
  config.set(isCI ? Object.assign(karmaBaseConfig, ciAdditions) : karmaBaseConfig);
};

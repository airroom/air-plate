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

module.exports = function (config) {
  config.set(karmaBaseConfig);
};
'use strict';

const istanbul = require('browserify-istanbul');
const gulpConfig = require('../gulp/config.js');
const karmaConfig = {};

karmaConfig.basePath = '../';

karmaConfig.frameworks = ['jasmine', 'browserify'];

karmaConfig.singleRun = true;
karmaConfig.autoWatch = false;

karmaConfig.preprocessors = { 'test/unit/**/*.spec.js': ['babel'] };
karmaConfig.preprocessors[gulpConfig.scripts.src] = ['browserify'];

karmaConfig.browsers = ['Chrome'];

karmaConfig.reporters = ['mocha', 'coverage'];

karmaConfig.browserify = { debug: true, transform: [] };
gulpConfig.browserify.transforms.forEach((transform) => {
  karmaConfig.browserify.transform.push([transform.name, transform.options]);
});
karmaConfig.browserify.transform.push(
  istanbul({
    ignore: ['**/js/vendor/**'],
    defaultIgnore: true,
    instrumenterConfig: { embedSource: true }, // Workaround for HTML coverage reporter
  })
);

karmaConfig.files = gulpConfig.browserify.entries.concat([
  './node_modules/angular-mocks/angular-mocks.js',
  'test/unit/**/*.spec.js',
]);

karmaConfig.coverageReporter = {
  dir: 'reports/coverage',
  reporters: [{
    type: 'html',
    subdir: 'html',
  }, {
    type: 'text',
  }, {
    type: 'text-summary',
  }],
};

const ciAdditions = {
  browsers: ['Firefox'],
};

module.exports = function karmaConf(config) {
  const isCI = process.env.CI;
  config.set(isCI ? Object.assign(karmaConfig, ciAdditions) : karmaConfig);
};

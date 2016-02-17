import angular from 'angular';
import declare from '../declare.js';

const bulk = require('bulk-require');
const factoriesMap = bulk(__dirname, ['./**/!(*index).js']);

declare(
  angular.module('app.factories', []),
  factoriesMap,
  'factory'
);

import angular from 'angular';
import declare from '../declare.js';

const bulk = require('bulk-require');
const componentsMap = bulk(__dirname, ['./**/!(*index).js']);

declare(
  angular.module('app.components', []),
  componentsMap,
  'component'
);

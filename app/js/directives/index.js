import angular from 'angular';
import declare from '../declare.js';

const bulk = require('bulk-require');
const directivesMap = bulk(__dirname, ['./**/!(*index).js']);

declare(
  angular.module('app.directives', []),
  directivesMap,
  'directive'
);

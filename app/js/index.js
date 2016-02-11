import angular from 'angular';
import 'angular-ui-router';

import './states';
import './templates.js';

angular.module('app', [
  'ui.router',
  'templates',
  'app.states'
]);

angular.bootstrap(document, ['app'], {
  strictDi: true
});

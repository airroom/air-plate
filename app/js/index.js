import './bootstrap-custom';
import angular from 'angular';
import 'angular-ui-router';

import './states';
import './controllers';
import './components';
import './directives';
import './factories';
import './templates.js';

angular.module('app', [
  'ui.router',
  'templates',
  'app.states',
  'app.controllers',
  'app.components',
  'app.directives',
  'app.factories',
]).run(appRun);

angular.bootstrap(document, ['app'], {
  strictDi: true,
});

/* @ngInject */
function appRun($rootScope, App) {
  $rootScope.App = App;
}

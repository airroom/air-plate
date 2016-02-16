import angular from 'angular';
import 'angular-ui-router';

import './states';
import './directives';
import './templates.js';

angular.module('app', [
  'ui.router',
  'templates',
  'app.states',
  'app.directives'
]);

angular.module('app').run(appRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});

function appRun($rootScope, $state) {
  'ngInject';

  $rootScope.App = {
    state: {
      title: function title() {
        if ($state.current.data && $state.current.data.title) {
          return $state.current.data.title;
        }
        return 'Air Plate';
      },
      description: function description() {
        if ($state.current.data && $state.current.data.description) {
          return $state.current.data.description;
        }
        return 'Boierplate de apps Angular.js 1.x, Bootstrap 4, Browserify e Gulp 4';
      }
    }
  };
}

import angular from 'angular';
import 'angular-ui-router';

import './states';
import './templates.js';

angular.module('app', [
  'ui.router',
  'templates',
  'app.states'
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
      }
    }
  };
}

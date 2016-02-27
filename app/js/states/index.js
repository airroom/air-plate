import angular from 'angular';
import definitions from './definitions.js';

const statesModule = angular.module('app.states', []);

statesModule.config(statesModuleConfig);

function statesModuleConfig($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.when('', '/');

  Object.keys(definitions).forEach((stateId) =>
    $stateProvider.state(stateId, definitions[stateId])
  );
}

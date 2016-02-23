'use strict';

describe('Directive: ng-bind-custom', function () {
  let element;

  beforeEach(module('app'));

  it('should set custom attribute', inject(($rootScope, $compile) => {
    $rootScope.custom = { content: 'cleyton' };
    element = angular.element('<meta ng-bind-custom="custom.content" custom-attr="content" name="description">');
    $compile(element)($rootScope);
    $rootScope.$digest();
    expect(element[0].getAttribute('content')).toEqual('cleyton');
  }));

  it('should change custom attribute when scope changes', inject(($rootScope, $compile) => {
    $rootScope.custom = { content: 'cleonice' };
    element = angular.element('<meta ng-bind-custom="custom.content" custom-attr="content" name="description">');
    $compile(element)($rootScope);
    $rootScope.$digest();
    expect(element[0].getAttribute('content')).toEqual('cleonice');
    $rootScope.custom.content = 'clarivaldo'
    $rootScope.$digest();
    expect(element[0].getAttribute('content')).toEqual('clarivaldo');
  }));

  it('should not produce a watcher when custom-attr is invalid', inject(($rootScope, $compile) => {
    let scope = $rootScope.$new();
    expect(scope.$$watchers).toBeNull();
    scope.custom = { content: 'valdirene' };
    element = angular.element('<meta ng-bind-custom="custom.content" custom-attr="name" name="description">');
    $compile(element)(scope);
    scope.$digest();
    expect(scope.$$watchers.length).toBe(1);
    scope.$destroy();
    scope = $rootScope.$new();
    element = angular.element('<meta ng-bind-custom="custom.content" name="description">');
    $compile(element)(scope);
    expect(scope.$$watchers).toBeNull();
  }));
});

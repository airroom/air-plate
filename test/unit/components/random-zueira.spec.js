'use strict';

/* global inject, angular */

describe('Component: random-zueira', function randomZueiraSpec() {
  let scope;
  let element;

  beforeEach(module('app'));

  beforeEach(inject(($rootScope, $compile) => {
    element = angular.element('<random-zueira></random-zueira>');
    $compile(element)($rootScope);
    scope = element.isolateScope();
    scope.$digest();
  }));

  it('should show a message', () => {
    expect(element.html().length).toBeTruthy();
  });

  it('should have a working binding', () => {
    scope.$ctrl.sentence = 'xablau';
    expect(element.html()).not.toEqual('xablau');
    scope.$digest();
    expect(element.html()).toEqual('xablau');
  });
});

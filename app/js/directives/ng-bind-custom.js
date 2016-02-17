import angular from 'angular';

export default {
  name: 'ngBindCustom',
  fn: ngBindCustom
};

/*@ngInject*/
function ngBindCustom($compile) {

  return {
    restrict: 'AC',
    compile: function ngBindCustomCompile(templateElement) {
      $compile.$$addBindingClass(templateElement);
      return function ngBindContentLink(scope, element, attr) {
        $compile.$$addBindingInfo(element, attr.ngBindCustom);
        element = element[0];
        scope.$watch(attr.ngBindCustom, function ngBindCustonWatchAction(value) {
          element.setAttribute(attr.customAttr, angular.isUndefined(value) ? '' : value);
        });
      };
    }
  };
}

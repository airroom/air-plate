import angular from 'angular';

export default {
  name: 'ngBindCustom',
  fn: ngBindCustom
};

/*@ngInject*/
function ngBindCustom($compile, $log) {
  return {
    restrict: 'AC',
    compile: function ngBindCustomCompile(templateElement) {
      $compile.$$addBindingClass(templateElement);
      return function ngBindContentLink(scope, element, attr) {
        if (!!attr.customAttr === false) {
          $log.error('ngBindCustom: custom attr not set');
          return;
        }
        $compile.$$addBindingInfo(element, attr.ngBindCustom);
        element = element[0];
        scope.$watch(attr.ngBindCustom, function ngBindCustonWatchAction(value) {
          element.setAttribute(attr.customAttr, angular.isUndefined(value) ? '' : value);
        });
      };
    }
  };
}

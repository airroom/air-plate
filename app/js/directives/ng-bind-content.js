import angular from 'angular';

export default {
  name: 'ngBindContent',
  fn: ngBindContent
};

function ngBindContent($compile) {
  'ngInject';

  return {
    restrict: 'AC',
    compile: function ngBindContentCompile(templateElement) {
      $compile.$$addBindingClass(templateElement);
      return function ngBindContentLink(scope, element, attr) {
        $compile.$$addBindingInfo(element, attr.ngBindContent);
        element = element[0];
        scope.$watch(attr.ngBindContent, function ngBindContentWatchAction(value) {
          element.content = angular.isUndefined(value) ? '' : value;
        });
      };
    }
  };
}

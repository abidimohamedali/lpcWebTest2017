'use strict';

angular.module('LpcWebTest2017')
    .directive('lpcLazyBackground', [function () {
  var lpcLazyBackgroundLink = function (scope, elem, attr) {
    //TODO
      elem.addClass("ng-show");
      var image = new Image();
      image.onload = function () {
          // the image must have been cached by the browser, so it should load quickly
          scope.$apply(function () {
              elem.css({ backgroundImage: 'url("' + scope.lpcLazyBackground + '")' , backgroundSize : 'cover' });
          });
      };
      image.src = scope.lpcLazyBackground;


  }
  return {
    restrict: 'A', scope: {lpcLazyBackground: '='}, link: lpcLazyBackgroundLink
  }

}]);

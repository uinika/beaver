(function () {

  angular.module("app.common")
    .directive("hankLoad", hankLoad);

  hankLoad.$inject = ["$window"];

  function hankLoad($window) {
    return {
      restrict: 'ACE',
      link: function link(scope, element, attrs) {
        element.load(
          "https://github.com/uinika",
          function () {
            
          })
      }
    };
  };

})();
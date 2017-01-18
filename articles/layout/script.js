(function () {

  /* module */
  angular.module("app.layout", []);

  /* controller */
  angular
    .module("app.layout")
    .controller("LayoutController", LayoutController);

  LayoutController.$inject = ["$scope", "$rootScope", "layoutService"];

  function LayoutController($scope, $rootScope, layoutService) {
    var vm = this;
    activate();

    function activate() {
      $scope.$on('$stateChangeSuccess',
        function (event, toState, toParams, fromState, fromParams) {
          $.AdminLTE.layout.fix();
          // $.AdminLTE.layout.fixSidebar();
          // $.AdminLTE.layout.activate();
        });
    };

  };

  /* service */
  angular
    .module("app.dashboard")
    .service("layoutService", layoutService);

  layoutService.$inject = ["$http"];

  function layoutService($http) {
    var service = {
      test: test
    };
    return service;

    function test() {};
  };

})();
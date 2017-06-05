(function () {

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

})();
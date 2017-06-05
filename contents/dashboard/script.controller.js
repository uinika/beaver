(function () {
  angular
    .module("app.dashboard")
    .controller("DashboardController", DashboardController);

  DashboardController.$inject = ["$scope", "$rootScope", "layoutService"];

  function DashboardController($scope, $rootScope, layoutService) {
    var vm = this;
    activate();

    vm.date = {
      now: moment().format('YYYY MMMM DD , hh:mm:ss')
    }

    function activate() {
    };

  };

})();
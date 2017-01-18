(function () {
  /* module */
  angular.module("app.dashboard", []);

  /* router */
  angular
    .module("app.dashboard")
    .config(dashboardConfig);

  dashboardConfig.$inject = ["$stateProvider"];

  function dashboardConfig($stateProvider) {
    $stateProvider
      .state("dashboard", {
        parent: "layout",
        url: "/dashboard",
        templateUrl: "articles/dashboard/view.html",
        controller: "DashboardController",
        controllerAs: "Dashboard",
      });
  };

  /* controller */
  angular
    .module("app.dashboard")
    .controller("DashboardController", DashboardController);

  DashboardController.$inject = ["$rootScope", "dashboardService"];

  function DashboardController($rootScope, dashboardService) {
    var jqDashboard = $("#dashboard");
    activate();

    function activate() {

    };
  };

  /* service */
  angular
    .module("app.dashboard")
    .service("dashboardService", dashboardService);

  dashboardService.$inject = ["$http"];

  function dashboardService($http) {
    var service = {
      test: test
    };
    return service;

    function test() {};
  };

  /* directive */
  angular
    .module("app.dashboard")
    .directive("wiservTest", wiservTest);

  wiservTest.$inject = [];

  function wiservTest() {

  };


})();
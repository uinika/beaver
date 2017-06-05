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
        templateUrl: "articles/dashboard/view.html"
      });
  };

})();
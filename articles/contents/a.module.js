(function () {
  /* module */
  angular.module("app.contents", []);

  /* router */
  angular
    .module("app.contents")
    .config(contentsConfig);

  contentsConfig.$inject = ["$stateProvider"];

  function contentsConfig($stateProvider) {
    $stateProvider
      .state("contents", {
        parent: "layout",
        url: "/contents",
        abstract: true,
        template: "<ui-view/>"
      })
  };

})();
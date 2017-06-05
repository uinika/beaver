(function () {
  /* module */
  angular.module("app.articles", []);

  /* router */
  angular
    .module("app.articles")
    .config(articlesConfig);

  articlesConfig.$inject = ["$stateProvider"];

  function articlesConfig($stateProvider) {
    $stateProvider
      .state("articles", {
        parent: "layout",
        url: "/articles",
        abstract: true,
        template: "<ui-view/>"
      })
  };

})();
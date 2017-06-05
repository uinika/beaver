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
      .state("articles.web", {
        url: "/web",
        templateUrl: "contents/articles/web/view.html"
      })
      .state("articles.electron", {
        url: "/electron",
        templateUrl: "contents/articles/electron/view.html"
      })
      .state("articles.design", {
        url: "/design",
        templateUrl: "contents/articles/design/view.html"
      })
      .state("articles.reading", {
        url: "/reading",
        templateUrl: "contents/articles/reading/view.html"
      })
  };

})();
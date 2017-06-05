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
        parent: "articles",
        url: "/web",
        templateUrl: "contents/articles/web/view.html"
      })
      .state("articles.electron", {
        parent: "articles",
        url: "/electron",
        templateUrl: "contents/articles/electron/view.html"
      })
      .state("articles.design", {
        parent: "articles",
        url: "/design",
        templateUrl: "contents/articles/design/view.html"
      })
      .state("articles.reading", {
        parent: "articles",
        url: "/reading",
        templateUrl: "contents/articles/reading/view.html"
      })
  };

})();
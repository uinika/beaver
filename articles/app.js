"use strict";

(function () {

  angular.module("app", [
      "ngAnimate",
      "ui.router",
      "ui.bootstrap",
      "common.http",
      "app.layout",
      "app.dashboard",
      "app.contents"
    ])
    .config(config);

  config.$inject = ["$stateProvider", "$urlRouterProvider", "$httpProvider"];

  function config($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise("/layout/dashboard");
    $stateProvider
      .state("layout", {
        url: "/layout",
        templateUrl: "articles/layout/view.html",
        controller: "LayoutController",
        controllerAs: "Layout"
      })
  };

})();
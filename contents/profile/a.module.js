(function () {
  /* module */
  angular.module("app.profile", []);

  /* router */
  angular
    .module("app.profile")
    .config(profileConfig);

  profileConfig.$inject = ["$stateProvider"];

  function profileConfig($stateProvider) {
    $stateProvider
      .state("profile", {
        parent: "layout",
        url: "/profile",
        templateUrl: "contents/profile/view.html"
      });
  };

})();
(function () {

  /* service */
  angular
    .module("app.layout")
    .service("layoutService", layoutService);

  layoutService.$inject = ["$http"];

  function layoutService($http) {
    var service = {
      test: test
    };
    return service;

    function test() {};
  };

})();
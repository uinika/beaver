(function () {

  angular.module("app.common")
    .constant("URL", {
      "master": "http://localhost:5009",
      "slave": "http://localhost:5008"
    });

})();
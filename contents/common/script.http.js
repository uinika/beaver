(function () {

  angular.module("app.common")
    .factory("verify", [
      function () {
        return function (data, status) {
          if (data && data.head &&
            data.head.status === status &&
            data.hasOwnProperty("body"))
            return true;
        };
      }
    ]);

})();
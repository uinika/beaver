(function () {

  angular.module('common.http', []);

  // url
  angular.module('common.http')
    .constant('URL', {
      "master": "http://localhost:5009",
      "slave": "http://localhost:5008"
    });

  // http
  angular.module('common.http')
    .factory('verify', [
      function () {
        return function (data, status) {
          if (data && data.head &&
            data.head.status === status &&
            data.hasOwnProperty('body'))
            return true;
        };
      }
    ]);

})();
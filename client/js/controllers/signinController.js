lcControllers.controller('signinCtrl', ['$scope', '$rootScope', '$window', 'SigninService',
  function($scope, $rootScope, $window, SigninService) {
    $scope.login = function(username, password) {
      var result = SigninService.post({
          "username": username,
          "password": password
        })
        .$promise.then(function(result) {
          if (result.result == 'success') {
            if (result.type == 'admin') {
              $window.location.href = '#/admin/trailers';
            } else {
              $rootScope.dealerName = result.dealerName;
              $window.location.href = '#/dealer/estimates';
            }
          } else {
            $scope.error = true;
          }
        });
    };
    $scope.showNavBar = false;

  }
]);

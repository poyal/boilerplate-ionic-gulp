(function() {
  'use strict';

  angular.module('app.tab')
    .controller('AccountCtrl', ['$scope', AccountCtrl]);

  function AccountCtrl($scope) {
    $scope.settings = {
      enableFriends: true
    };
  }
})();

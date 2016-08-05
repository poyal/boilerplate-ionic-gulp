(function() {
  'use strict';

  angular.module('app.setting')
    .controller('SettingCtrl', SettingCtrl);

  SettingCtrl.$inject = ['$scope'];

  function SettingCtrl($scope) {
    $scope.settings = {
      enableFriends: true
    };
  }
})();

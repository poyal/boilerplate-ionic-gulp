(function() {
  'use strict';

  angular
    .module('app.dash')
    .controller('DashCtrl', DashCtrl);

  DashCtrl.$inject = ['$scope', '$ionicPopup', '$cordovaDevice'];

  function DashCtrl($scope, $ionicPopup, $cordovaDevice) {
  }

})();

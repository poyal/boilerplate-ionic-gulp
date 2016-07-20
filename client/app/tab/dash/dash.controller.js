(function() {
  'use strict';

  angular.module('app.tab')
    .controller('DashCtrl', ['$scope', '$ionicPopup', '$cordovaDevice', DashCtrl]);

  function DashCtrl($scope, $ionicPopup, $cordovaDevice) {

    document.addEventListener('deviceready', function() {
      console.log('test');
      var device = $cordovaDevice.getDevice();

      var cordova = $cordovaDevice.getCordova();

      var model = $cordovaDevice.getModel();

      var platform = $cordovaDevice.getPlatform();

      var uuid = $cordovaDevice.getUUID();

      var version = $cordovaDevice.getVersion();

      $ionicPopup.alert({
        title: 'model',
        subTitle: model
      });
      
    }, false);

  }

})();

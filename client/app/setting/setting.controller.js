(function() {
  'use strict';

  angular.module('app.setting')
    .controller('SettingCtrl', SettingCtrl);

  SettingCtrl.$inject = [];

  function SettingCtrl() {
    var vm = this;

    activate();

    function activate() {

    }

    vm.settings = {
      enableFriends: true
    };
  }
})();

(function() {
  'use strict';

  angular
    .module('app.setting', [])
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('app.setting', {
          url: '/setting',
          views: {
            'menuContent': {
              templateUrl: 'app/setting/setting.html',
              controller: 'SettingCtrl',
              controllerAs: 'vm'
            }
          }
        });
    }]);

})();

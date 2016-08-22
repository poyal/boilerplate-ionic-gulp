(function() {
  'use strict';

  angular
    .module('app.dash', [])
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('app.dash', {
          url: '/dash',
          views: {
            'menuContent': {
              templateUrl: 'app/dash/dash.html',
              controller: 'DashCtrl',
              controllerAs: 'vm'
            }
          }
        });
    }]);

})();

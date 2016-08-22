(function() {
  'use strict';

  angular
    .module('app.main', [])
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'app/main/main.html',
          controller: 'MainCtrl',
          controllerAs: 'vm'
        });
    }]);

})();

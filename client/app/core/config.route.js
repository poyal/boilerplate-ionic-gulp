(function() {
  'use strict';

  angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'app/templates/menu.html',
            controller: 'AppCtrl',
            controllerAs: 'root'
          });

        $urlRouterProvider.otherwise('/app/dash');

      }
    ]);

})();

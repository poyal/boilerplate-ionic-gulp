(function() {
  'use strict';

  angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        var routes, setRoutes;

        routes = [
          //'tab/dash', 'tab/chats', 'tab/account'
        ];

        setRoutes = function(route) {
          var config, url;
          url = '/' + route;
          config = {
            url: url,
            templateUrl: 'app/' + route + '.html'
          };
          $stateProvider.state(route, config);
          return $stateProvider;
        };

        routes.forEach(function(route) {
          return setRoutes(route);
        });

        function getTemplate(url) {
          return $templateCache.get(url);
        }

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

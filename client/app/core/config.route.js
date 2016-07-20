(function() {
  'use strict';

  angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
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

        console.log(config);
        $stateProvider.state(route, config);
        return $stateProvider;
      };

      routes.forEach(function(route) {
        return setRoutes(route);
      });

      $stateProvider
        .state('tab', {
          url: '/tab',
          abstract: true,
          templateUrl: 'app/tab/tabs.html'
        })
        .state('tab.dash', {
          url: '/dash',
          views: {
            'tab-dash': {
              templateUrl: 'app/tab/dash/dash.html',
              controller: 'DashCtrl'
            }
          }
        })
        .state('tab.chats', {
          url: '/chats',
          views: {
            'tab-chats': {
              templateUrl: 'app/tab/chats/chats.html',
              controller: 'ChatsCtrl'
            }
          }
        })
        .state('tab.chat-detail', {
          url: '/chats/:chatId',
          views: {
            'tab-chats': {
              templateUrl: 'app/tab/chats/chat-detail.html',
              controller: 'ChatDetailCtrl'
            }
          }
        })
        .state('tab.account', {
          url: '/account',
          views: {
            'tab-account': {
              templateUrl: 'app/tab/account/account.html',
              controller: 'AccountCtrl'
            }
          }
        });

      $urlRouterProvider
        .otherwise('/tab/dash');
        
    }]);

})();

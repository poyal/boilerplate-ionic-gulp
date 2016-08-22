(function() {
  'use strict';

  angular
    .module('app.page', [])
    .config(function($stateProvider) {
      $stateProvider
        .state('app.page', {
          url: '/page',
          abstract: true,
          views: {
            'menuContent': {
              template: '<ion-nav-view name="pageContent"></ion-nav-view>'
            }
          }
        })
        .state('app.page.index', {
          url: '/index',
          views: {
            'pageContent': {
              templateUrl: 'app/page/index/index.html',
              controller: 'IndexCtrl',
              controllerAs: 'vm'
            }
          }
        });

      if(window.pageRoutes) {
        var routes = pageRoutes;
        routes.forEach(function(route) {
          setRoutes(route);
        });
      }

      function setRoutes(route) {
        var key = Object.keys(route)[0];
        $stateProvider.
        state('app.page.' + key, {
          url: '/' + key,
          abstract: true,
          views: {
            'pageContent': {
              template: '<ion-nav-view name="subContent"></ion-nav-view>'
            }
          }
        });

        function setChildRoutes(route, key) {
          var config, url, routeState;
          routeState = 'app.page.' + key + '.' + route;
          url = '/' + route;
          config = {
            url: url,
            views: {
              'subContent': {
                templateUrl: 'app/page/' + key + '/' + route + '.html'
              }
            }
          };
          $stateProvider.state(routeState, config);
        }

        angular.forEach(route[key], function(route) {
          setChildRoutes(route, key);
        });
      }


    });

})();

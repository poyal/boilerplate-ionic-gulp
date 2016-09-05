(function () {
    'use strict';

    angular.module('app.map', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('app.map', {
                    url: '/map',
                    abstract: true,
                    views: {
                        'menuContent': {
                            template: '<ion-nav-view name="mapContent"></ion-nav-view>'
                        }
                    }
                })

                .state('app.map.map', {
                    url: '/map',
                    views: {
                        'mapContent': {
                            templateUrl: 'app/map/map/map.html',
                            controller: 'MapCtrl',
                            controllerAs: 'vm'
                        }
                    }
                })

        });
})();

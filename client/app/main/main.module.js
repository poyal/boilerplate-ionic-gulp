(function () {
    'use strict';

    angular
        .module('app.main', [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('app.home', {
                    url: '/home',
                    views: {
                        'menuContent': {
                            templateUrl: 'app/main/main.html',
                            controller: 'MainCtrl',
                            controllerAs: 'vm'
                        }
                    }
                });
        }]);
})();

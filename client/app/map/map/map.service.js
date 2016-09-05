(function () {
    'use strict';

    angular
        .module('app.map')
        .factory('MapService', MapService);

    MapService.$inject = [];

    function MapService() {
        var service = {
            map: map
        };
        return service;

        function map() {
            console.log('MapService');

        }
    }

})();



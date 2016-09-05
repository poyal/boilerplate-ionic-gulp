(function () {
    'use strict';

    angular
        .module('app.order')
        .factory('ConstructionFinishCheckService', ConstructionFinishCheckService)
        .factory('ConstructionFinishCheckUpdateService', ConstructionFinishCheckUpdateService);

    ConstructionFinishCheckService.$inject = ['$q'];

    function ConstructionFinishCheckService($q) {
        var service = {
            constructionFinishCheck: constructionFinishCheck
        };
        return service;

        function constructionFinishCheck(searchData) {
            console.log('ConstructionFinishCheckService');
            var data = {};
            var def = $q.defer();
            if (searchData !== null) {
                data = {
                    serviceNo: '0003993',
                    businessName: '안경나라',
                    username: '전성기'
                };
                def.resolve(data);
            } else {
                data = {result: "999"};
                def.reject(data);
            }
            return def.promise;
        }
    }

    ConstructionFinishCheckUpdateService.$inject = ['$q'];

    function ConstructionFinishCheckUpdateService($q) {
        var service = {
            constructionFinishCheckUpdate: constructionFinishCheckUpdate
        };
        return service;

        function constructionFinishCheckUpdate(searchData) {
            console.log('ConstructionFinishCheckUpdateService');
            var data = {};
            var def = $q.defer();
            if (searchData !== null) {
                data = {result: "000"};
                def.resolve(data);
            } else {
                data = {result: "999"};
                def.reject(data);
            }
            return def.promise;
        }
    }
})();


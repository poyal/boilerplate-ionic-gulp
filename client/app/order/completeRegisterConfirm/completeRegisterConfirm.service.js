(function () {
    'use strict';

    angular
        .module('app.order')
        .factory('completeRegisterConfirmService', completeRegisterConfirmService)
        .factory('CompleteRegisterConfirmUpdateService', CompleteRegisterConfirmUpdateService);

    completeRegisterConfirmService.$inject = ['$q'];

    function completeRegisterConfirmService($q) {
        var service = {
            completeRegisterConfirm: completeRegisterConfirm
        };
        return service;

        function completeRegisterConfirm(searchData) {
            console.log('completeRegisterConfirmService');
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

    CompleteRegisterConfirmUpdateService.$inject = ['$q'];

    function CompleteRegisterConfirmUpdateService($q) {
        var service = {
            completeRegisterConfirmUpdate:completeRegisterConfirmUpdate
        };

        return service;

        function completeRegisterConfirmUpdate(searchData) {
            console.log('completeRegisterConfirmUpdateService');
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


(function () {
    'use strict';

    angular
        .module('app.order')
        .factory('DemolishMaterialService', DemolishMaterialService)
        .factory('DemolishMaterialUpdateService', DemolishMaterialUpdateService);

    DemolishMaterialService.$inject = ['$q'];

    function DemolishMaterialService($q) {
        var service = {
            demolishMaterial: demolishMaterial
        };
        return service;

        function demolishMaterial(searchData) {
            console.log("DemolishMaterialService");
            var data = {};
            var def = $q.defer();
            if (searchData !== null) {
                data = {
                    materialName:'공중전용-BT314',
                    materialGubun: '',
                    installNum: '10'
                };



                def.resolve(data);
            } else {
                data = {result: "999"};
                def.reject(data);
            }
            return def.promise;
        }
    }

    DemolishMaterialUpdateService.$inject = ['$q'];

    function DemolishMaterialUpdateService($q) {
        var service = {
            demolishMaterialUpdate: demolishMaterialUpdate
        };

        return service;

        function demolishMaterialUpdate(searchData) {
            console.log('DemolishMaterialUpdateService');
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


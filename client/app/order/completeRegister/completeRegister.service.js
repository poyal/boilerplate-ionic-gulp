(function () {
    'use strict';

    angular
        .module('app.order')
        .factory('orderCompleteRegisterService', orderCompleteRegisterService);

    orderCompleteRegisterService.$inject = ['$q'];

    function orderCompleteRegisterService($q) {
        var service = {
            completeRegister: completeRegister
        };
        return service;

        function completeRegister(searchData) {
            console.log("orderCompleteRegisterService");

            var data = {};
            var def = $q.defer();
            if (searchData !== null) {
                data = {
                    serviceNo: '0003993',
                    businessName: '안경나라',
                    username: '전성기',
                    materials: [
                        {
                            order: '1',
                            demolish: null,
                            nonDemolish: null,
                            device: '주장치=KTT801NS(네오웨이브)'
                        }, {
                            order: '2',
                            demolish: null,
                            nonDemolish: null,
                            device: '주장치=KTT801NS(네오웨이브)'
                        }, {
                            order: '3',
                            demolish: null,
                            nonDemolish: null,
                            device: '주장치=KTT801NS(네오웨이브)'
                        }, {
                            order: '4',
                            demolish: null,
                            nonDemolish: null,
                            device: '주장치=KTT801NS(네오웨이브)'
                        }
                    ],
                    installMaterials: [
                        {
                            state: '신품',
                            num: '1',
                            device: '주장치-KTT801NS(네오웨이브)'
                        }, {
                            state: '신품',
                            num: '1',
                            device: '주장치-KTT801NS(네오웨이브)'
                        }, {
                            state: '신품',
                            num: '1',
                            device: '주장치-KTT801NS(네오웨이브)'
                        }, {
                            state: '신품',
                            num: '1',
                            device: '주장치-KTT801NS(네오웨이브)'
                        }
                    ]
                };
                def.resolve(data);
            } else {
                data = {result: "999"};
                def.reject(data);
            }
            return def.promise;
        }
    }

})();
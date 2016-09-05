(function () {
    'use strict';

    angular
        .module('app.completion')
        .factory('CompletionRegisterService', CompletionRegisterService)
        .factory('CompletionRegisterUpdateService', CompletionRegisterUpdateService);

    CompletionRegisterService.$inject = ['$q'];

    function CompletionRegisterService($q) {
        var service = {
            completionRegister: completionRegister
        };
        return service;

        function completionRegister(searchData) {
            console.log('CompletionRegisterService');
            var def = $q.defer();
            var data = [];
            if (searchData !== null) {
                data = {
                    serviceNo: '0003993',
                    businessName: '안경나라',
                    username: '전성기',
                    delayDate: '59',
                    score: '100',
                    arrData: [
                        {
                            id: '001',
                            head: '결합장치 설치',
                            content: '없음'
                        }, {
                            id: '002',
                            head: '카드리더 옥(실)외 설치',
                            content: '없음'
                        }, {
                            id: '003',
                            head: '감지기 설치',
                            content: '입력한 내용 비고'
                        }
                    ]
                };
                def.resolve(data);
            } else {
                data = [{
                    message: "error"
                }];
                def.reject(data);
            }
            return def.promise;
        }
    }

    CompletionRegisterUpdateService.$inject = ['$q'];

    function CompletionRegisterUpdateService($q) {
        var service = {
            completionRegisterUpdate: completionRegisterUpdate
        };
        return service;

        function completionRegisterUpdate(searchData) {
            console.log('CompletionRegisterUpdateService');
            var data = {};
            var def = $q.defer();
            if (searchData !== null) {
                data = {
                    result: "000"
                };
                def.resolve(data);
            } else {
                data = {
                    result: "999"
                };
                def.reject(data);
            }
            return def.promise;
        }

    }

})();


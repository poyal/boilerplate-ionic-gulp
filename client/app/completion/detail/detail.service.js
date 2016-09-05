(function () {
    'use strict';

    angular
        .module('app.completion')
        .factory('CompletionDetailService', CompletionDetailService)
        .factory('CompletionDetailUpdateService', CompletionDetailUpdateService);

    CompletionDetailService.$inject = ['$q'];

    function CompletionDetailService($q) {
        var service = {
            completionDetail: completionDetail
        };
        return service;

        function completionDetail(searchData) {
            console.log('CompletionDetailService');
            var def = $q.defer();
            var data = [];
            if (searchData !== null) {
                data = {
                    construction: {
                        serviceNo: '60026799',
                        subscriptionData: '2015/09/27',
                        constructionDate: '2015/09/28',
                        customerName: '백만금',
                        companyName: '우정커뮤',
                        phoneNo: '02-9458-9087',
                        installAddr1: '서울 강남구 역삼동',
                        installAddr2: '787-09번지',
                        bussinessType1: '서비스업',
                        bussinessType2: '기타서비스업',
                        installOrderType: '신규설치',
                        nightInstall: 'N',
                        beforeWiring: null,
                        offDayInstall: 'N'
                    },
                    materials: [
                        {
                            order: '1',
                            demolish: null,
                            nonDemolish: null,
                            device: '주장치-KTT801NS(네오웨이브)'
                        }, {
                            order: '2',
                            demolish: null,
                            nonDemolish: null,
                            device: '주장치-KTT801NS(네오웨이브)'
                        }, {
                            order: '3',
                            demolish: null,
                            nonDemolish: null,
                            device: '주장치-KTT801NS(네오웨이브)'
                        }, {
                            order: '4',
                            demolish: null,
                            nonDemolish: null,
                            device: '주장치-KTT801NS(네오웨이브)'
                        }
                    ],
                    controlSignal: [
                        {
                            signalDate: '2012/08/14 09:34:30',
                            signalContent: '침입(1번)'
                        }, {
                            signalDate: '2012/08/14 09:34:30',
                            signalContent: '경계(1번)'
                        }, {
                            signalDate: '2012/08/14 09:34:30',
                            signalContent: '해제(1번)'
                        }, {
                            signalDate: '2012/08/14 09:34:30',
                            signalContent: '국선체크'
                        }
                    ],
                    qList: {
                        q1: '1',
                        q2: '2',
                        q3: '3',
                        q4: '4',
                        q5: '5'
                    }
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

    CompletionDetailUpdateService.$inject = ['$q'];

    function CompletionDetailUpdateService($q) {
        var service = {
            completionDetailUpdate: completionDetailUpdate
        };

        return service;

        function completionDetailUpdate(searchData) {
            console.log("CompletionDetailUpdateService");
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


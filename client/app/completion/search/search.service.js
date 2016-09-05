(function () {
    'use strict';

    angular
        .module('app.completion')
        .factory('CompletionSearchService', CompletionSearchService);

    CompletionSearchService.$inject = ['$q'];

    function CompletionSearchService($q) {
        var service = {
            completionSearch: completionSearch
        };
        return service;

        function completionSearch(searchData) {
            console.log('CompletionSearchService');
            var def = $q.defer();
            var data = [];
            if (searchData !== null) {
                data = [
                    {
                        id: "0000001",
                        branch: "A001",
                        type: "변경신규설치",
                        userName: "조서영",
                        installCode: "00335561"
                    }, {
                        id: "0000002",
                        branch: "A002",
                        type: "유지보수",
                        userName: "tes1",
                        installCode: "00335562"
                    }, {
                        id: "0000003",
                        branch: "A003",
                        type: "변경신규설치",
                        userName: "tes2",
                        installCode: "00335563"
                    }, {
                        id: "0000004",
                        branch: "A004",
                        type: "유지보수",
                        userName: "tes3",
                        installCode: "00335564"
                    }, {
                        id: "0000005",
                        branch: "A005",
                        type: "변경신규설치",
                        userName: "tes4",
                        installCode: "00335565"
                    }
                ];
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

})();


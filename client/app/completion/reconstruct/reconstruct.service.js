(function () {
    'use strict';

    angular
        .module('app.completion')
        .factory('CompletionReconstructService', CompletionReconstructService);

    CompletionReconstructService.$inject = ['$q'];

    function CompletionReconstructService($q) {
        var service = {
            completionReconstruct: completionReconstruct
        };
        return service;

        function completionReconstruct(searchData) {
            console.log('CompletionReconstructService');
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


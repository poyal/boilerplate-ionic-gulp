(function () {
    'use strict';

    angular
        .module('app.completion')
        .factory('CompletionNoteService', CompletionNoteService)
        .factory('CompletionNoteUpdateService', CompletionNoteUpdateService);

    CompletionNoteService.$inject = ['$q'];

    function CompletionNoteService($q) {
        var service = {
            completionNote: completionNote
        };
        return service;

        function completionNote(searchData) {
            console.log('CompletionNoteService');
            var def = $q.defer();
            var data = [];
            if (searchData !== null) {
                data = {
                    note: '미리 입력된 노트 예시 입니다.'
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

    CompletionNoteUpdateService.$inject = ['$q'];

    function CompletionNoteUpdateService($q) {
        var service = {
            completionNoteUpdate: completionNoteUpdate
        };
        return service;

        function completionNoteUpdate(searchData) {
            console.log('CompletionNoteUpdateService');
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


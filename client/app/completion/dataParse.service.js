(function () {
    'use strict';

    angular
        .module('app.completion')
        .service('CompletionDataParseService', CompletionDataParseService);

    CompletionDataParseService.$inject = [];

    function CompletionDataParseService() {
        var parseData = this;
        parseData.list = [];

        parseData.setParseList = function (dataList) {
            parseData.list = [];
            parseData.list = dataList;
        };

        parseData.getParseList = function () {
            return parseData.list;
        };
    }

})();


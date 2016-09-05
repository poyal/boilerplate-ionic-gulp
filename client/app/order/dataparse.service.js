(function () {
    'use strict';

    angular
        .module('app.order')
        .service('orderDataParseService', orderDataParseService);

    orderDataParseService.$inject = [];

    /* @ngInject */
    function orderDataParseService() {
        var parseList = this;
        parseList.list = [];
        parseList.signJson = {};

        parseList.setParseList =  function(parseData) {
            console.log("orderDataParseService - setParseList");
            if(parseData !== null){
                parseList.list = [];
                parseList.list = parseData;
            }
        };

        parseList.getParseList = function () {
            console.log("orderDataParseService - getParseList");
            return parseList.list;
        };

        parseList.setSignJson = function (parseJson) {
            if(parseJson !== null){
                parseList.signJson = {};
                parseList.signJson = parseJson;
            }
        };

        parseList.getSignJson = function () {
            console.log("orderDataParseService - getSignJson");
            return parseList.signJson;
        };
    }
})();


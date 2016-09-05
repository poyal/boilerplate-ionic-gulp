(function () {
    'use strict';

    angular
        .module('app.order')
        .controller('CustomerSignCtrl', CustomerSignCtrl);

    CustomerSignCtrl.$inject = ['$stateParams', '$window', 'CustomerSignService', 'orderDataParseService'];

    function CustomerSignCtrl($stateParams, $window, CustomerSignService, orderDataParseService) {
        var vm = this;
        console.log('CustomerSignCtrl');

        vm.insertData = {
            id: $stateParams.id,
            signName: '',
            sign: 'EXAMPLE'
        };

        vm.completeButton = function () {
            CustomerSignService.customerSign(vm.insertData).then(function successCallBack(data) {
                if (data.result === '000') {
                    var setData = {
                        id: $stateParams.id,
                        boolean: true
                    };
                    orderDataParseService.setSignJson(setData);
                    $window.history.back();
                }
            }, function errorCallBack(data) {
                window.alert("ERROR");
            })
        }
    }

})();


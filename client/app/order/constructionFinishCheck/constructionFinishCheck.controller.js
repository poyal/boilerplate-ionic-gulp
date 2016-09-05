(function () {
    'use strict';

    angular
        .module('app.order')
        .controller('ConstructionFinishCheckCtrl', ConstructionFinishCheckCtrl);

    ConstructionFinishCheckCtrl.$inject = ['$scope', '$state', '$window', '$stateParams', 'ConstructionFinishCheckService', 'orderDataParseService', 'ConstructionFinishCheckUpdateService'];

    function ConstructionFinishCheckCtrl($scope, $state, $window, $stateParams, ConstructionFinishCheckService, orderDataParseService, ConstructionFinishCheckUpdateService) {
        var vm = this;
        console.log('ConstructionFinishCheckCtrl');
        var searchData = {};
        vm.parseData = {};
        vm.userSignFlag = false;

        vm.qList = {
            q1: "0",
            q2: "0",
            q3: "0",
            q4: "0",
            q5: "0"
        };

        $scope.$on('$ionicView.enter', function () {
            searchData.id = $stateParams.id;
            ConstructionFinishCheckService.constructionFinishCheck(searchData).then(function successCallBack(data) {
                vm.parseData = data;
            }, function errorCallBack(data) {
                window.alert("ERROR");
            });

            var signData = orderDataParseService.getSignJson();
            if (signData.id === $stateParams.id) {
                if (signData.boolean == null) {
                    signData.boolean = false;
                }
                vm.userSignFlag = signData.boolean;
            }
        });

        vm.goCustomerSign = function () {
            $state.go('app.order.customerSign', {id: $stateParams.id});
        };

        vm.customerSignUpdate = function () {
            ConstructionFinishCheckUpdateService.constructionFinishCheckUpdate(vm.qList).then(function successCallBack(data) {
                if (data.result === "000") {
                    $window.history.back();
                    $window.history.back();
                    $window.history.back();
                }
            }, function errorCallBack(data) {
                window.alert("ERROR");
            })
        };
    }
})();


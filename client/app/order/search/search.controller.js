(function () {
    'use strict';

    angular
        .module('app.order')
        .controller('OrderSearchCtrl', OrderSearchCtrl);

    OrderSearchCtrl.$inject = ['$state', '$ionicPopup', 'orderSearchService', 'orderDataParseService'];

    function OrderSearchCtrl($state, $ionicPopup, orderSearchService, orderDataParseService) {
        console.log("OrderSearchCtrl");
        var vm = this;
        vm.searchFlag = true;
        vm.title = "공사발주서등록";
        vm.searchData = {
            HQ: "000",
            branch: "000",
            type: "000",
            startDate: new Date(),
            endDate: new Date(),
            request: "000",
            business: "000",
            install: "000"
        };

        function showAlert(title, template) {
            $ionicPopup.alert({
                title: title,
                template: template
            });
        }

        vm.footerClick = function (form) {
            var submitFlag = true;

            //validating
            if (vm.searchData.HQ === "000") {
                showAlert('본부','본부를 입력해 주세요.');
                submitFlag = false;
            }

            if(submitFlag){
                if(vm.searchFlag == true) {
                    delete vm.searchData.request;
                    delete vm.searchData.business;
                    delete vm.searchData.install;
                }

                orderSearchService.orderSearch(vm.searchData).then(function successCallback(data) {
                    orderDataParseService.setParseList(data);
                    $state.go('app.order.list');

                }, function errorCallback(data) {
                    window.alert('Error');
                });
            }
        }
    }
})();
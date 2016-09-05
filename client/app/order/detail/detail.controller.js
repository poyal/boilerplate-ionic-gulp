(function () {
    'use strict';

    angular
        .module('app.order')
        .controller('OrderDetailController', OrderDetailController);

    OrderDetailController.$inject = ['$scope', '$state', '$stateParams', '$ionicPopover', '$ionicPopup', 'orderDetailFactory', 'orderDetailCheckListFactory'];

    function OrderDetailController($scope, $state, $stateParams, $ionicPopover, $ionicPopup, orderDetailFactory, orderDetailCheckListFactory) {
        var vm = this;
        console.log("OrderDetailController");
        vm.addrString = 'order-detail-popover';
        console.log(vm.addrString.indexOf("popover") > 0)
        vm.popoverId = $stateParams.id;
        vm.searchData = {
            id: null
        };
        vm.resultData = {};
        vm.dataJson = vm.chekcklist;
        vm.chekcklist = [{
            text: '검사항목1',
            isConfirm: true
        }, {
            text: '검사항목2',
            isConfirm: false
        }, {
            text: '검사항목3',
            isConfirm: false
        }, {
            text: '검사항목4',
            isConfirm: false
        }];

        $scope.$on('$ionicView.enter', function () {
            vm.searchData.id = $stateParams.id;
            orderDetailFactory.getOrderDetail(vm.searchData.id).then(function successCallback(data) {
                vm.resultData = data;

            }, function errorCallback(data) {
                window.alert('Error');
            });
        });

        $scope.$on('$ionicView.leave', function () {
            vm.popover.hide();
        });

        $ionicPopover.fromTemplateUrl('app/templates/popoverMenu/detail-popover.html', {
            scope: $scope
        }).then(function (popover) {
            vm.popover = popover;
        });
    }
})();

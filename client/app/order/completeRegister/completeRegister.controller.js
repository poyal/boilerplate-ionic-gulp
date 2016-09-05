(function () {
    'use strict';

    angular
        .module('app.order')
        .controller('completeRegisterCtrl', completeRegisterCtrl);

    completeRegisterCtrl.$inject = ['$scope', '$state', '$stateParams', '$ionicPopover', 'orderCompleteRegisterService'];

    function completeRegisterCtrl($scope, $state, $stateParams, $ionicPopover, orderCompleteRegisterService) {
        var vm = this;
        console.log("completeRegisterCtrl");

        vm.addrString = 'order-register-popover';
        vm.popoverId = $stateParams.id;
        vm.completeRegisterData = {};

        $ionicPopover.fromTemplateUrl('app/templates/popoverMenu/detail-popover.html', {
            scope: $scope
        }).then(function (popover) {
            vm.popover = popover;
        });

        $scope.$on('$ionicView.enter', function () {
            var id = $stateParams.id;
            orderCompleteRegisterService.completeRegister(id).then(function successCallback(data) {
                vm.completeRegisterData = data;
            }, function errorCallBack(data) {
                window.alert("ERROR");
            });
        });

        vm.toggleList = function(list) {
            if (vm.isListShown(list)) {
                vm.shownGroup = null;
            } else {
                vm.shownGroup = list;
            }
        };
        vm.isListShown = function(list) {
            return vm.shownGroup === list;
        };

        vm.goDemolishMaterial = function (order) {
            $state.go('app.order.demolishMaterial',{id:$stateParams.id,order:order});
        };

        vm.addComplete = function () {
            vm.popover.hide();
            $state.go('app.order.completeRegisterConfirm',{id:$stateParams.id});
        }
    }

})();


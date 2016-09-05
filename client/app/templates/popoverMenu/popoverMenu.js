(function () {
    'use strict';

    angular
        .module('app.templates')
        .directive('popoverMenu', popoverMenu);

    popoverMenu.$inject = [];

    function popoverMenu() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'app/templates/popoverMenu/popover-menu.html',
            scope: {
                addr: '@',
                id: '@',
                code: '@',
                json: '='
            },
            replace: true,
            bindToController: true,
            controller: PopoverMainController,
            controllerAs: 'popover',
            link: PopoverMainLink
        };
        return directive;
        function PopoverMainLink(scope, element, attrs, ctrl) {
        }
    }

    PopoverMainController.$inject = ['$state', 'orderDetailCheckListFactory', 'CompletionDetailUpdateService'];

    function PopoverMainController($state, orderDetailCheckListFactory, CompletionDetailUpdateService) {
        var vm = this;

        vm.flag = true;
        if (vm.addr === 'completion-register') {
            vm.flag = false;
        }

        vm.goDetail = function () {
            var state = '';
            if (vm.addr === 'completion') {
                state = 'app.completion.detail';
            } else if (vm.addr === 'order') {
                state = 'app.order.detail';
            } else if (vm.addr === 'order-register-popover') {
                state = 'app.order.completeRegisterConfirm';
            }
            $state.go(state, {id: vm.id});
        };

        vm.addComplete = function () {
            console.log(vm);
            if (vm.addr === 'order-detail-popover') {
                orderDetailCheckListFactory.getOrderCheckDetail(vm.json).then(function successCallback(data) {
                    if (data.result === "000") {
                        $state.go('app.order.completeRegister', {id: vm.id});
                    } else {
                        window.alert("ERROR");
                    }
                }, function errorCallback(data) {
                    window.alert("ERROR");
                })
            } else if (vm.addr === 'completion-detail-popover') {
                CompletionDetailUpdateService.completionDetailUpdate(vm.json).then(function successCallBack(data) {
                    if (data.result === '000') {
                        $state.go('app.completion.completionRegister', {id: vm.id});
                    }
                }, function errorCallBack(data) {
                    window.alert("ERROR");
                })
            }
        };

        vm.goNewWindow = function () {
            var state = '';
            if (vm.addr === 'completion-register') {
                state = 'app.completion.note';
            }
            $state.go(state, {id: vm.id, code: vm.code});
        }
    }
})();
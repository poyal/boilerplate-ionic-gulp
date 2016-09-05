(function () {
    'use strict';

    angular
        .module('app.order')
        .controller('OrderListCtrl', OrderListCtrl);

    OrderListCtrl.$inject = ['$scope', '$state', 'orderDataParseService'];

    function OrderListCtrl($scope, $state, orderDataParseService) {
        var vm = this;

        $scope.$on('$ionicView.enter', function () {
            console.log("OrderListCtrl");
            vm.parsedList = orderDataParseService.getParseList();
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

        vm.goDetail = function (id) {
            $state.go('app.order.detail',{id:id});
        }

    }
})();
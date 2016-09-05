(function () {
    'use strict';

    angular
        .module('app.completion')
        .controller('CompletionDetailCtrl', CompletionDetailCtrl);

    CompletionDetailCtrl.$inject = ['$scope', '$state', '$stateParams', '$ionicPopover', 'CompletionDetailService', 'CompletionDetailUpdateService'];

    function CompletionDetailCtrl($scope, $state, $stateParams, $ionicPopover, CompletionDetailService, CompletionDetailUpdateService) {
        var vm = this;
        console.log('CompletionDetailCtrl');
        vm.addrString = 'completion-detail-popover';
        vm.popoverId = $stateParams.id;
        vm.resultData = {};
        var searchData = {
            id: $stateParams.id
        };

        $scope.$on('$ionicView.enter', function () {
            vm.resultData = [];
            CompletionDetailService.completionDetail(searchData).then(function successCallBack(data) {
                vm.resultData = data;
            }, function errorCallBack(data) {
                window.alert("ERROR");
            })
        });

        $ionicPopover.fromTemplateUrl('app/templates/popoverMenu/detail-popover.html', {
            scope: $scope
        }).then(function (popover) {
            vm.popover = popover;
        });

        $scope.$on('$ionicView.leave', function () {
            vm.popover.hide();
        });
    }
})();


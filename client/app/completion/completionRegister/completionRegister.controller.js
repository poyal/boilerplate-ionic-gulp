(function () {
    'use strict';

    angular
        .module('app.completion')
        .controller('CompletionRegisterCtrl', CompletionRegisterCtrl);

    CompletionRegisterCtrl.$inject = ['$scope', '$state', '$window', '$stateParams', 'CompletionRegisterService', 'CompletionRegisterUpdateService'];

    function CompletionRegisterCtrl($scope, $state, $window, $stateParams, CompletionRegisterService, CompletionRegisterUpdateService) {
        var vm = this;

        console.log('CompletionRegisterCtrl');

        vm.searchData = {
            id: $stateParams.id
        };

        vm.dataJson = {};

        $scope.$on('$ionicView.enter', function () {
            CompletionRegisterService.completionRegister(vm.searchData).then(function successCallBack(data) {
                vm.dataJson = data;
                vm.dataJson.reason = '000';
            }, function errorCallBack(data) {
                window.alert("ERROR");
            })

        });

        vm.toggleList = function (list) {
            if (vm.isListShown(list)) {
                vm.shownGroup = null;
            } else {
                vm.shownGroup = list;
            }
        };
        vm.isListShown = function (list) {
            return vm.shownGroup === list;
        };

        vm.goReconstruct = function () {
            $state.go('app.completion.reconstruct', {id: $stateParams.id});
        };

        vm.completeRegister = function () {
            CompletionRegisterUpdateService.completionRegisterUpdate(vm.dataJson).then(function successCallBack(data) {
                if (data.result === '000') {
                    $window.history.back();
                }
            }, function errorCallBack(data) {
                window.alert("ERROR");
            })
        };
    }

})();


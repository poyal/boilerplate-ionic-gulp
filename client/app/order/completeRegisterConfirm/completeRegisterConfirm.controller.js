(function () {
    'use strict';

    angular
        .module('app.order')
        .controller('CompleteRegisterConfirmCtrl', CompleteRegisterConfirmCtrl);

    CompleteRegisterConfirmCtrl.$inject = ['$scope', '$state', '$stateParams', 'completeRegisterConfirmService', 'CompleteRegisterConfirmUpdateService'];

    function CompleteRegisterConfirmCtrl($scope, $state, $stateParams, completeRegisterConfirmService, CompleteRegisterConfirmUpdateService) {
        var vm = this;
        console.log('CompleteRegisterConfirmCtrl');

        vm.parseData = {};

        $scope.$on('$ionicView.enter', function () {
            var searchData = {
                id: $stateParams.id
            };
            completeRegisterConfirmService.completeRegisterConfirm(searchData).then(function successCallBack(data) {
                vm.parseData = data;
            }, function errorCallBack(data) {
                window.alert("ERROR");
            })
        });
        vm.completeButton = function (data) {
            CompleteRegisterConfirmUpdateService.completeRegisterConfirmUpdate(data).then(function successCallBack(data) {
                if (data.result === '000') {
                    $state.go('app.order.constructionFinishCheck',{id:$stateParams.id});
                }
            }, function errorCallBack(data) {
                window.alert("ERROR");

            })
        }
    }
})();


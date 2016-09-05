(function () {
    'use strict';

    angular
        .module('app.order')
        .controller('DemolishMaterialCtrl', DemolishMaterialCtrl);

    DemolishMaterialCtrl.$inject = ['$scope', '$stateParams', '$window', 'DemolishMaterialService', 'DemolishMaterialUpdateService'];

    function DemolishMaterialCtrl($scope, $stateParams, $window, DemolishMaterialService, DemolishMaterialUpdateService) {
        var vm = this;
        console.log('DemolishMaterialCtrl');

        vm.parseData = {};

        $scope.$on('$ionicView.enter', function () {
            var searchData = {
                id: $stateParams.id,
                order: $stateParams.order
            };
            DemolishMaterialService.demolishMaterial(searchData).then(function successCallBack(data) {
                vm.parseData = data;
            }, function errorCallBack(data) {
                window.alert("ERROR");
            })
        });

        vm.demolishMaterialSave = function (form) {
            DemolishMaterialUpdateService.demolishMaterialUpdate(form).then(function successCallBack(data) {
                if(data.result === '000') {
                    $window.history.back();
                }
            }, function errorCallBack(data) {
                window.alert('error');
            })
        }
    }
})();

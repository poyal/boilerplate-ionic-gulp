(function () {
    'use strict';

    angular
        .module('app.completion')
        .controller('CompletionReconstructCtrl', CompletionReconstructCtrl);

    CompletionReconstructCtrl.$inject = ['$scope', '$window', '$stateParams', 'CompletionReconstructService'];

    function CompletionReconstructCtrl($scope, $window, $stateParams, CompletionReconstructService) {
        var vm = this;
        console.log('CompletionReconstructCtrl');
        vm.dataJson = {};
        vm.dataJson.reConstructGubun = '000';
        vm.dataJson.id = $stateParams.id;

        vm.reconstructUpdate = function () {
            CompletionReconstructService.completionReconstruct(vm.dataJson).then(function successCallBack(data) {
                if(data.result = '000'){
                    $window.history.back();
                }
            }, function errorCallBack(data) {
                window.alert("ERROR");
            })
        }

    }
})();


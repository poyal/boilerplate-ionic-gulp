(function () {
    'use strict';

    angular
        .module('app.completion')
        .controller('CompletionNoteCtrl', CompletionNoteCtrl);

    CompletionNoteCtrl.$inject = ['$scope', '$window', '$stateParams', 'CompletionNoteService', 'CompletionNoteUpdateService'];

    function CompletionNoteCtrl($scope, $window, $stateParams, CompletionNoteService, CompletionNoteUpdateService) {
        var vm = this;
        console.log("CompletionNoteCtrl");

        var searchData = {
            id: $stateParams.id,
            code: $stateParams.code
        };

        vm.dataJson = {};

        $scope.$on('$ionicView.enter', function () {
            CompletionNoteService.completionNote(searchData).then(function successCallBack(data) {
                vm.dataJson = data;
            }, function errorCallBack(data) {
                window.alert('ERROR');
            })
        });

        vm.noteUpdate = function () {
            vm.dataJson.code = $stateParams.code;
            CompletionNoteUpdateService.completionNoteUpdate(vm.dataJson).then(function successCallBack(data) {
                if(data.result === '000'){
                    $window.history.back();
                }
            }, function errorCallBack(data) {
                window.alert("ERROR");
            })
        }
    }
})();


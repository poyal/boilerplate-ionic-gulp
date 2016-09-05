(function () {
    'use strict';

    angular
        .module('app.completion')
        .controller('CompletionListCtrl', CompletionListCtrl);

    CompletionListCtrl.$inject = ['$scope', 'CompletionDataParseService'];

    function CompletionListCtrl($scope, CompletionDataParseService) {
        var vm = this;
        console.log('CompletionListCtrl');

        vm.parsedList = [];
        $scope.$on('$ionicView.enter', function () {
            vm.parsedList = CompletionDataParseService.getParseList();
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
    }

})();


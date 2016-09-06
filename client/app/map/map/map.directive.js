(function () {
    'use strict';

    angular
        .module('app.map')
        .directive('mapUserController', mapUserController);

    mapUserController.$inject = [];

    function mapUserController() {
        var directive = {
            templateUrl: 'app/map/map/map-controller.html',
            bindToController: true,
            controller: MapControllerCtrl,
            controllerAs: 'vm',
            link: mapControllerLink,
            restrict: 'E',
            scope: {
                moveAmount: '@'
            }
        };
        return directive;

        function mapControllerLink(scope, element, attrs, ctrl) {

        }
    }

    MapControllerCtrl.$inject = ['$scope'];

    function MapControllerCtrl($scope) {
        var vm = this;
        vm.upAction = function () {
            $scope.$parent.updateDir(0,vm.moveAmount);
        };

        vm.leftAction = function () {
            $scope.$parent.updateDir(-vm.moveAmount,0);
        };

        vm.rightAction = function () {
            $scope.$parent.updateDir(vm.moveAmount,0);
        };

        vm.downAction = function () {
            $scope.$parent.updateDir(0,-vm.moveAmount);
        };
    }
})();
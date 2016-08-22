(function() {
  'use strict';

  angular
    .module('app')
    .controller('AppCtrl', AppCtrl);

  AppCtrl.$inject = ['$scope'];

  function AppCtrl($scope) {
    var vm = this;

    activate();

    function activate() {

    }
  }

})();

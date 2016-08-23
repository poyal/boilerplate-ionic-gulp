(function() {
  'use strict';

  angular
    .module('app.page')
    .controller('IndexCtrl', IndexCtrl);

  IndexCtrl.$inject = ['$window', '$state'];

  function IndexCtrl($window, $state) {
    var vm = this;

    vm.pages = [];

    activate();

    function activate() {
      angular.forEach($window.pageRoutes, function(obj) {
        var key = Object.keys(obj)[0];
        vm.pages.push({
          title: key,
          header: true,
          link: null
        });

        angular.forEach(obj[key], function(route) {
          var page = {
            title: route,
            header: false,
            link: 'app.page.' + key + '.' + route
          };
          vm.pages.push(page);
        });
      });

      vm.goto = function(route) {
        if (route.link === null) {
          console.log('you clicked subheader');
        } else {
          $state.go(route.link);
        }
      };


    }
  }
})();

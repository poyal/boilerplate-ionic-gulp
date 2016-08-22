(function() {
  'use strict';

  angular
    .module('app.page')
    .controller('IndexCtrl', IndexCtrl)
    .service('Pages', Pages);

  IndexCtrl.$inject = ['$window'];

  function IndexCtrl($window) {
    var vm = this;

    vm.pages = [];

    activate();

    vm.getClass = function(route) {
      var cls = 'item';
      if(route.header) {
        cls = cls + ' item-divider';
      }
      return 'item';
    }

    function activate() {
      angular.forEach($window.pageRoutes, function(obj) {
        var key = Object.keys(obj)[0];
        console.log(key);
        vm.pages.push({
          title: key,
          header: true,
          link: null
        });
        angular.forEach(obj[key], function(route) {
          var page = {
            title: route,
            header: false,
            link: 'app.page.' + key + '.' + route,
            href: '#/app/page/' + key + '/' + route
          };
          vm.pages.push(page);
        });
      });



    }
  }

  function Pages() {
    return {

    }
  }

})();

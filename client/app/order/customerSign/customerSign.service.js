(function () {
    'use strict';

    angular
        .module('app.order')
        .service('CustomerSignService', CustomerSignService);

    CustomerSignService.$inject = ['$q'];

    function CustomerSignService($q) {
        this.customerSign = customerSign;

        function customerSign(searchData) {
            console.log('CustomerSignService');
            var data = {};
            var def = $q.defer();
            if (searchData !== null) {
                data = {result: "000"};
                def.resolve(data);
            } else {
                data = {result: "999"};
                def.reject(data);
            }
            return def.promise;
        }
    }

})();


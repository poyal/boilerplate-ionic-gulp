(function () {
    'use strict';

    angular
        .module('app.completion')
        .controller('CompletionSearchCtrl', CompletionSearchCtrl);

    CompletionSearchCtrl.$inject = ['$state', '$ionicPopup', 'CompletionSearchService', 'CompletionDataParseService'];

    function CompletionSearchCtrl($state, $ionicPopup, CompletionSearchService, CompletionDataParseService) {
        var vm = this;
        console.log('CompletionSearchCtrl');
        vm.title = "공사 준공 등록";
        vm.searchFlag = true;
        vm.searchData = {
            HQ: "000",
            branch: "000",
            type: "000",
            startDate: new Date(),
            endDate: new Date(),
            request: "000",
            business: "000",
            install: "000"
        };

        function showAlert(title, template) {
            $ionicPopup.alert({
                title: title,
                template: template
            });
        }

        vm.footerClick = function (form) {
            var submitFlag = true;

            //validating
            if (vm.searchData.HQ === "000") {
                showAlert('본부','본부를 입력해 주세요.');
                submitFlag = false;
            }

            if(submitFlag){
                if(vm.searchFlag == true) {
                    delete vm.searchData.request;
                    delete vm.searchData.business;
                    delete vm.searchData.install;
                }

                CompletionSearchService.completionSearch(vm.searchData).then(function successCallback(data) {
                    CompletionDataParseService.setParseList(data);
                    $state.go('app.completion.list');

                }, function errorCallback(data) {
                    window.alert('Error');
                });
            }
        }
    }

})();


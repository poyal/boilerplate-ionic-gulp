(function () {
    'use strict';

    angular.module('app.order', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('app.order', {
                    url: '/order',
                    abstract: true,
                    views: {
                        'menuContent': {
                            template: '<ion-nav-view name="orderContent"></ion-nav-view>'
                        }
                    }
                })

                .state('app.order.search', {
                    url: '/search',
                    views: {
                        'orderContent': {
                            templateUrl: 'app/templates/search.html',
                            controller: 'OrderSearchCtrl',
                            controllerAs: 'vm'
                        }
                    }
                })

                .state('app.order.list', {
                    url: '/list',
                    views: {
                        'orderContent': {
                            templateUrl: 'app/order/list/list.html',
                            controller: 'OrderListCtrl',
                            controllerAs: 'vm'
                        }
                    }
                })

                .state('app.order.detail', {
                    url: '/detail/:id',
                    views: {
                        'orderContent': {
                            templateUrl: 'app/order/detail/detail.html',
                            controller: 'OrderDetailController',
                            controllerAs: 'vm'
                        }
                    }
                })

                .state('app.order.completeRegister', {
                    url: '/completeRegister/:id',
                    views: {
                        'orderContent': {
                            templateUrl: 'app/order/completeRegister/completeRegister.html',
                            controller: 'completeRegisterCtrl',
                            controllerAs: 'vm'
                        }
                    }
                })

                .state('app.order.demolishMaterial', {
                    url: '/demolishMaterial/:id/:order',
                    views: {
                        'orderContent': {
                            templateUrl: 'app/order/demolishMaterial/demolishMaterial.html',
                            controller: 'DemolishMaterialCtrl',
                            controllerAs: 'vm'
                        }
                    }
                })

                .state('app.order.completeRegisterConfirm', {
                    url: '/completeRegisterConfirm/:id',
                    views: {
                        'orderContent': {
                            templateUrl: 'app/order/completeRegisterConfirm/completeRegisterConfirm.html',
                            controller: 'CompleteRegisterConfirmCtrl',
                            controllerAs: 'vm'
                        }
                    }
                })

                .state('app.order.constructionFinishCheck', {
                    url: '/constructionFinishCheck/:id',
                    views: {
                        'orderContent': {
                            templateUrl: 'app/order/constructionFinishCheck/constructionFinishCheck.html',
                            controller: 'ConstructionFinishCheckCtrl',
                            controllerAs: 'vm'
                        }
                    }
                })

                .state('app.order.customerSign', {
                    url: '/customerSign/:id',
                    views: {
                        'orderContent': {
                            templateUrl: 'app/order/customerSign/customerSign.html',
                            controller: 'CustomerSignCtrl',
                            controllerAs: 'vm'
                        }
                    }
                })

        });
})();

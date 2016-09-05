(function () {
    'use strict';

    angular.module('app.completion', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('app.completion', {
                    url: '/completion',
                    abstract: true,
                    views: {
                        'menuContent': {
                            template: '<ion-nav-view name="completionContent"></ion-nav-view>'
                        }
                    }
                })

                .state('app.completion.search', {
                    url: '/search',
                    views: {
                        'completionContent': {
                            templateUrl: 'app/templates/search.html',
                            controller: 'CompletionSearchCtrl',
                            controllerAs: 'vm'
                        }
                    }
                })

                .state('app.completion.list', {
                    url: '/list',
                    views: {
                        'completionContent': {
                            templateUrl: 'app/completion/list/list.html',
                            controller: 'CompletionListCtrl',
                            controllerAs: 'vm'
                        }
                    }
                })

                .state('app.completion.detail', {
                    url: '/detail/:id',
                    views: {
                        'completionContent': {
                            templateUrl: 'app/completion/detail/detail.html',
                            controller: 'CompletionDetailCtrl',
                            controllerAs: 'vm'
                        }
                    }
                })

                .state('app.completion.completionRegister', {
                    url: '/completionRegister/:id',
                    views: {
                        'completionContent': {
                            templateUrl: 'app/completion/completionRegister/completionRegister.html',
                            controller: 'CompletionRegisterCtrl',
                            controllerAs: 'vm'
                        }
                    }
                })

                .state('app.completion.note', {
                    url: '/note/:id/:code',
                    views: {
                        'completionContent': {
                            templateUrl: 'app/completion/note/note.html',
                            controller: 'CompletionNoteCtrl',
                            controllerAs: 'vm'
                        }
                    }
                })

                .state('app.completion.reconstruct', {
                    url: '/reconstruct/:id',
                    views: {
                        'completionContent': {
                            templateUrl: 'app/completion/reconstruct/reconstruct.html',
                            controller: 'CompletionReconstructCtrl',
                            controllerAs: 'vm'
                        }
                    }
                })

        });
})();

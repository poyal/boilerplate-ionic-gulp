(function() {
  'use strict';

  angular
    .module('app.chats', [])
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('app.chats', {
          url: '/chats',
          views: {
            'menuContent': {
              templateUrl: 'app/chats/chats.html',
              controller: 'ChatsCtrl',
              controllerAs: 'vm'
            }
          }
        })
        .state('app.chat', {
          url: '/chat/:chatId',
          views: {
            'menuContent': {
              templateUrl: 'app/chats/chat-detail.html',
              controller: 'ChatDetailCtrl',
              controllerAs: 'vm'
            }
          }
        });
    }]);

})();

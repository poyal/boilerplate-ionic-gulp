(function() {
  'use strict';

  angular.module('app.chats')
    .controller('ChatsCtrl', ChatsCtrl)
    .controller('ChatDetailCtrl', ChatDetailCtrl);

  ChatsCtrl.$inject = ['$scope', 'Chats'];
  ChatDetailCtrl.$inject = ['$scope', '$stateParams', 'Chats'];

  function ChatsCtrl($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    };
  }

  function ChatDetailCtrl($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  }


})();

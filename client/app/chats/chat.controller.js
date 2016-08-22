(function() {
  'use strict';

  angular
    .module('app.chats')
    .controller('ChatDetailCtrl', ChatDetailCtrl);

  ChatDetailCtrl.$inject = ['$stateParams', 'Chats'];

  function ChatDetailCtrl($stateParams, Chats) {
    var vm = this;

    vm.chat = Chats.get($stateParams.chatId);
  }


})();

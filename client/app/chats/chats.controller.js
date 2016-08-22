(function() {
  'use strict';

  angular
    .module('app.chats')
    .controller('ChatsCtrl', ChatsCtrl);

  ChatsCtrl.$inject = ['Chats'];

  function ChatsCtrl(Chats) {
    var vm = this;
    vm.chats = Chats.all();
    vm.remove = function(chat) {
      Chats.remove(chat);
    };
  }


})();

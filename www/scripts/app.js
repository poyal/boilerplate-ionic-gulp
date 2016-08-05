!function(){"use strict";angular.module("app",["ionic","ngCordova","app.core","app.setting","app.main","app.dash","app.chats"])}(),angular.module("app.templates",[]).run(["$templateCache",function(t){t.put("app/chats/chat-detail.html",'<!--\r\n  This template loads for the \'tab.friend-detail\' state (app.js)\r\n  \'friend\' is a $scope variable created in the FriendsCtrl controller (controllers.js)\r\n  The FriendsCtrl pulls data from the Friends service (service.js)\r\n  The Friends service returns an array of friend data\r\n-->\r\n<ion-view view-title="{{chat.name}}">\r\n  <ion-content class="padding">\r\n    <img ng-src="{{chat.face}}" style="width: 64px; height: 64px">\r\n    <p>\r\n      {{chat.lastText}}\r\n    </p>\r\n  </ion-content>\r\n</ion-view>\r\n'),t.put("app/chats/chats.html",'<ion-view view-title="Chats">\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item class="item-remove-animate item-avatar item-icon-right" ng-repeat="chat in chats" type="item-text-wrap" ui-sref="app.chat({chatId:chat.id})">\r\n        <img ng-src="{{chat.face}}">\r\n        <h2>{{chat.name}}</h2>\r\n        <p>{{chat.lastText}}</p>\r\n        <i class="icon ion-chevron-right icon-accessory"></i>\r\n\r\n        <ion-option-button class="button-assertive" ng-click="remove(chat)">\r\n          Delete\r\n        </ion-option-button>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-view>\r\n'),t.put("app/dash/dash.html",'<ion-view view-title="Dashboard">\r\n  <ion-content class="padding">\r\n    <h2>Welcome to Ionic</h2>\r\n    <p>\r\n    This is the Ionic starter for tabs-based apps. For other starters and ready-made templates, check out the <a href="http://market.ionic.io/starters" target="_blank">Ionic Market</a>.\r\n    </p>\r\n    <p>\r\n      To edit the content of each tab, edit the corresponding template file in <code>www/templates/</code>. This template is <code>www/templates/tab-dash.html</code>\r\n    </p>\r\n    <p>\r\n    If you need help with your app, join the Ionic Community on the <a href="http://forum.ionicframework.com" target="_blank">Ionic Forum</a>. Make sure to <a href="http://twitter.com/ionicframework" target="_blank">follow us</a> on Twitter to get important updates and announcements for Ionic developers.\r\n    </p>\r\n    <p>\r\n      For help sending push notifications, join the <a href="https://apps.ionic.io/signup" target="_blank">Ionic Platform</a> and check out <a href="http://docs.ionic.io/docs/push-overview" target="_blank">Ionic Push</a>. We also have other services available.\r\n    </p>\r\n  </ion-content>\r\n</ion-view>\r\n'),t.put("app/main/main.html",'<ion-view>\r\n  <h1>Home</h1>\r\n  <ul>\r\n    <li><button type="button" class="button" ui-sref="app.dash">Dash</button></li>\r\n  </ul>\r\n</ion-view>\r\n'),t.put("app/setting/setting.html",'<ion-view view-title="Account">\r\n  <ion-content>\r\n    <ion-list>\r\n    <ion-toggle  ng-model="settings.enableFriends">\r\n        Enable Friends\r\n    </ion-toggle>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-view>\r\n'),t.put("app/templates/menu.html",'<ion-side-menus enable-menu-with-back-views="false">\r\n  <ion-side-menu-content>\r\n    <ion-nav-bar class="bar-stable">\r\n      <ion-nav-back-button>\r\n      </ion-nav-back-button>\r\n\r\n      <ion-nav-buttons side="left">\r\n        <button class="button button-icon button-clear ion-navicon" menu-toggle="left">\r\n        </button>\r\n      </ion-nav-buttons>\r\n    </ion-nav-bar>\r\n    <ion-nav-view name="menuContent"></ion-nav-view>\r\n  </ion-side-menu-content>\r\n\r\n  <ion-side-menu side="left">\r\n    <ion-header-bar class="bar-stable">\r\n      <h1 class="title">Left</h1>\r\n    </ion-header-bar>\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-item menu-close ui-sref="home">\r\n          Home\r\n        </ion-item>\r\n        <ion-item menu-close ui-sref="app.dash">\r\n          Dash\r\n        </ion-item>\r\n        <ion-item menu-close ui-sref="app.chats">\r\n          Chats\r\n        </ion-item>\r\n        <ion-item menu-close ui-sref="app.setting">\r\n          Setting\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-side-menu>\r\n</ion-side-menus>\r\n')}]),function(){"use strict";angular.module("app.chats",[]).config(["$stateProvider",function(t){t.state("app.chats",{url:"/chats",views:{menuContent:{templateUrl:"app/chats/chats.html",controller:"ChatsCtrl"}}}).state("app.chat",{url:"/chat/:chatId",views:{menuContent:{templateUrl:"app/chats/chat-detail.html",controller:"ChatDetailCtrl"}}})}])}(),function(){"use strict";angular.module("app.core",[])}(),function(){"use strict";angular.module("app.dash",[]).config(["$stateProvider",function(t){t.state("app.dash",{url:"/dash",views:{menuContent:{templateUrl:"app/dash/dash.html",controller:"DashCtrl"}}})}])}(),function(){"use strict";angular.module("app.main",[]).config(["$stateProvider",function(t){t.state("home",{url:"/home",templateUrl:"app/main/main.html",controller:"MainCtrl"})}])}(),function(){"use strict";angular.module("app.setting",[]).config(["$stateProvider",function(t){t.state("app.setting",{url:"/setting",views:{menuContent:{templateUrl:"app/setting/setting.html",controller:"SettingCtrl"}}})}])}(),function(){"use strict";function t(t,n){t.chats=n.all(),t.remove=function(t){n.remove(t)}}function n(t,n,e){t.chat=e.get(n.chatId)}angular.module("app.chats").controller("ChatsCtrl",t).controller("ChatDetailCtrl",n),t.$inject=["$scope","Chats"],n.$inject=["$scope","$stateParams","Chats"]}(),function(){"use strict";angular.module("app.chats").factory("Chats",function(){var t=[{id:0,name:"Ben Sparrow",lastText:"You on your way?",face:"img/ben.png"},{id:1,name:"Max Lynx",lastText:"Hey, it's me",face:"img/max.png"},{id:2,name:"Adam Bradleyson",lastText:"I should buy a boat",face:"img/adam.jpg"},{id:3,name:"Perry Governor",lastText:"Look at my mukluks!",face:"img/perry.png"},{id:4,name:"Mike Harrington",lastText:"This is wicked good ice cream.",face:"img/mike.png"}];return{all:function(){return t},remove:function(n){t.splice(t.indexOf(n),1)},get:function(n){for(var e=0;e<t.length;e++)if(t[e].id===parseInt(n))return t[e];return null}}})}(),function(){"use strict";function t(t){t.ready(function(){window.cordova&&window.cordova.plugins&&window.cordova.plugins.Keyboard&&(cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),cordova.plugins.Keyboard.disableScroll(!0)),window.StatusBar&&StatusBar.styleDefault()})}angular.module("app").run(["$ionicPlatform",t])}(),function(){"use strict";angular.module("app").config(["$stateProvider","$urlRouterProvider",function(t,n){var e,a;e=[],a=function(n){var e,a;return a="/"+n,e={url:a,templateUrl:"app/"+n+".html"},t.state(n,e),t},e.forEach(function(t){return a(t)}),t.state("app",{url:"/app","abstract":!0,templateUrl:"app/templates/menu.html",controller:"AppCtrl"}),n.otherwise("/app/dash")}])}(),function(){"use strict";function t(t){}angular.module("app").controller("AppCtrl",t),t.$inject=["$scope"]}(),function(){"use strict";function t(t,n,e){}angular.module("app.dash").controller("DashCtrl",t),t.$inject=["$scope","$ionicPopup","$cordovaDevice"]}(),function(){"use strict";function t(t){}angular.module("app.main").controller("MainCtrl",t),t.$inject=["$scope"]}(),function(){"use strict";function t(t){t.settings={enableFriends:!0}}angular.module("app.setting").controller("SettingCtrl",t),t.$inject=["$scope"]}();
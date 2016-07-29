!function(){"use strict";angular.module("app",["ionic","ngCordova","app.core","app.templates","app.tab"])}(),angular.module("app.templates",[]).run(["$templateCache",function(t){t.put("app/tab/tabs.html",'<!--\nCreate tabs with an icon and label, using the tabs-positive style.\nEach tab\'s child <ion-nav-view> directive will have its own\nnavigation history that also transitions its views in and out.\n-->\n<ion-tabs class="tabs-icon-top tabs-color-active-positive">\n\n  <!-- Dashboard Tab -->\n  <ion-tab title="Status" icon-off="ion-ios-pulse" icon-on="ion-ios-pulse-strong" href="#/tab/dash">\n    <ion-nav-view name="tab-dash"></ion-nav-view>\n  </ion-tab>\n\n  <!-- Chats Tab -->\n  <ion-tab title="Chats" icon-off="ion-ios-chatboxes-outline" icon-on="ion-ios-chatboxes" href="#/tab/chats">\n    <ion-nav-view name="tab-chats"></ion-nav-view>\n  </ion-tab>\n\n  <!-- Account Tab -->\n  <ion-tab title="Account" icon-off="ion-ios-gear-outline" icon-on="ion-ios-gear" href="#/tab/account">\n    <ion-nav-view name="tab-account"></ion-nav-view>\n  </ion-tab>\n\n\n</ion-tabs>\n'),t.put("app/tab/account/account.html",'<ion-view view-title="Account">\n  <ion-content>\n    <ion-list>\n    <ion-toggle  ng-model="settings.enableFriends">\n        Enable Friends\n    </ion-toggle>\n    </ion-list>\n  </ion-content>\n</ion-view>\n'),t.put("app/tab/chats/chat-detail.html",'<!--\n  This template loads for the \'tab.friend-detail\' state (app.js)\n  \'friend\' is a $scope variable created in the FriendsCtrl controller (controllers.js)\n  The FriendsCtrl pulls data from the Friends service (service.js)\n  The Friends service returns an array of friend data\n-->\n<ion-view view-title="{{chat.name}}">\n  <ion-content class="padding">\n    <img ng-src="{{chat.face}}" style="width: 64px; height: 64px">\n    <p>\n      {{chat.lastText}}\n    </p>\n  </ion-content>\n</ion-view>\n'),t.put("app/tab/chats/chats.html",'<ion-view view-title="Chats">\n  <ion-content>\n    <ion-list>\n      <ion-item class="item-remove-animate item-avatar item-icon-right" ng-repeat="chat in chats" type="item-text-wrap" href="#/tab/chats/{{chat.id}}">\n        <img ng-src="{{chat.face}}">\n        <h2>{{chat.name}}</h2>\n        <p>{{chat.lastText}}</p>\n        <i class="icon ion-chevron-right icon-accessory"></i>\n\n        <ion-option-button class="button-assertive" ng-click="remove(chat)">\n          Delete\n        </ion-option-button>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-view>\n'),t.put("app/tab/dash/dash.html",'<ion-view view-title="Dashboard">\n  <ion-content class="padding">\n    <h2>Welcome to Ionic</h2>\n    <p>\n    This is the Ionic starter for tabs-based apps. For other starters and ready-made templates, check out the <a href="http://market.ionic.io/starters" target="_blank">Ionic Market</a>.\n    </p>\n    <p>\n      To edit the content of each tab, edit the corresponding template file in <code>www/templates/</code>. This template is <code>www/templates/tab-dash.html</code>\n    </p>\n    <p>\n    If you need help with your app, join the Ionic Community on the <a href="http://forum.ionicframework.com" target="_blank">Ionic Forum</a>. Make sure to <a href="http://twitter.com/ionicframework" target="_blank">follow us</a> on Twitter to get important updates and announcements for Ionic developers.\n    </p>\n    <p>\n      For help sending push notifications, join the <a href="https://apps.ionic.io/signup" target="_blank">Ionic Platform</a> and check out <a href="http://docs.ionic.io/docs/push-overview" target="_blank">Ionic Push</a>. We also have other services available.\n    </p>\n  </ion-content>\n</ion-view>\n')}]),function(){"use strict";angular.module("app.core",[])}(),function(){"use strict";angular.module("app.tab",[])}(),function(){"use strict";function t(t){t.ready(function(){window.cordova&&window.cordova.plugins&&window.cordova.plugins.Keyboard&&(cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),cordova.plugins.Keyboard.disableScroll(!0)),window.StatusBar&&StatusBar.styleDefault()})}angular.module("app").run(["$ionicPlatform",t])}(),function(){"use strict";angular.module("app").config(["$stateProvider","$urlRouterProvider",function(t,n){var a,e;a=[],e=function(n){var a,e;return e="/"+n,a={url:e,templateUrl:"app/"+n+".html"},t.state(n,a),t},a.forEach(function(t){return e(t)}),t.state("tab",{url:"/tab","abstract":!0,templateUrl:"app/tab/tabs.html"}).state("tab.dash",{url:"/dash",views:{"tab-dash":{templateUrl:"app/tab/dash/dash.html",controller:"DashCtrl"}}}).state("tab.chats",{url:"/chats",views:{"tab-chats":{templateUrl:"app/tab/chats/chats.html",controller:"ChatsCtrl"}}}).state("tab.chat-detail",{url:"/chats/:chatId",views:{"tab-chats":{templateUrl:"app/tab/chats/chat-detail.html",controller:"ChatDetailCtrl"}}}).state("tab.account",{url:"/account",views:{"tab-account":{templateUrl:"app/tab/account/account.html",controller:"AccountCtrl"}}}),n.otherwise("/tab/dash")}])}(),function(){"use strict";function t(t,n){t.chats=n.all(),t.remove=function(t){n.remove(t)}}function n(t,n,a){t.chat=a.get(n.chatId)}angular.module("app.tab").controller("ChatsCtrl",["$scope","Chats",t]).controller("ChatDetailCtrl",["$scope","$stateParams","Chats",n])}(),function(){"use strict";angular.module("app.tab").factory("Chats",function(){var t=[{id:0,name:"Ben Sparrow",lastText:"You on your way?",face:"img/ben.png"},{id:1,name:"Max Lynx",lastText:"Hey, it's me",face:"img/max.png"},{id:2,name:"Adam Bradleyson",lastText:"I should buy a boat",face:"img/adam.jpg"},{id:3,name:"Perry Governor",lastText:"Look at my mukluks!",face:"img/perry.png"},{id:4,name:"Mike Harrington",lastText:"This is wicked good ice cream.",face:"img/mike.png"}];return{all:function(){return t},remove:function(n){t.splice(t.indexOf(n),1)},get:function(n){for(var a=0;a<t.length;a++)if(t[a].id===parseInt(n))return t[a];return null}}})}(),function(){"use strict";function t(t){t.settings={enableFriends:!0}}angular.module("app.tab").controller("AccountCtrl",["$scope",t])}(),function(){"use strict";function t(t,n,a){document.addEventListener("deviceready",function(){console.log("test");var t=(a.getDevice(),a.getCordova(),a.getModel());a.getPlatform(),a.getUUID(),a.getVersion();n.alert({title:"model",subTitle:t})},!1)}angular.module("app.tab").controller("DashCtrl",["$scope","$ionicPopup","$cordovaDevice",t])}();
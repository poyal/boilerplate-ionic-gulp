!function(){"use strict";angular.module("app",["ionic","app.core","app.tab"])}(),function(){"use strict";angular.module("app.core",[])}(),function(){"use strict";angular.module("app.tab",[])}(),function(){"use strict";function t(t){t.ready(function(){window.cordova&&window.cordova.plugins&&window.cordova.plugins.Keyboard&&(cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),cordova.plugins.Keyboard.disableScroll(!0)),window.StatusBar&&StatusBar.styleDefault()})}angular.module("app").run(["$ionicPlatform",t])}(),function(){"use strict";angular.module("app").config(["$stateProvider","$urlRouterProvider",function(t,a){var e,r;e=[],r=function(a){var e,r;return r="/"+a,e={url:r,templateUrl:"app/"+a+".html"},console.log(e),t.state(a,e),t},e.forEach(function(t){return r(t)}),t.state("tab",{url:"/tab","abstract":!0,templateUrl:"app/tab/tabs.html"}),t.state("tab.dash",{url:"/dash",views:{"tab-dash":{templateUrl:"app/tab/dash/dash.html",controller:"DashCtrl"}}}).state("tab.chats",{url:"/chats",views:{"tab-chats":{templateUrl:"app/tab/chats/chats.html",controller:"ChatsCtrl"}}}).state("tab.chat-detail",{url:"/chats/:chatId",views:{"tab-chats":{templateUrl:"app/tab/chats/chat-detail.html",controller:"ChatDetailCtrl"}}}).state("tab.account",{url:"/account",views:{"tab-account":{templateUrl:"app/tab/account/account.html",controller:"AccountCtrl"}}}),a.otherwise("/tab/dash")}])}(),function(){"use strict";function t(t){t.settings={enableFriends:!0}}angular.module("app.tab").controller("AccountCtrl",["$scope",t])}(),function(){"use strict";function t(t,a){t.chats=a.all(),t.remove=function(t){a.remove(t)}}function a(t,a,e){t.chat=e.get(a.chatId)}angular.module("app.tab").controller("ChatsCtrl",["$scope","Chats",t]).controller("ChatDetailCtrl",["$scope","$stateParams","Chats",a])}(),function(){"use strict";angular.module("app.tab").factory("Chats",function(){var t=[{id:0,name:"Ben Sparrow",lastText:"You on your way?",face:"img/ben.png"},{id:1,name:"Max Lynx",lastText:"Hey, it's me",face:"img/max.png"},{id:2,name:"Adam Bradleyson",lastText:"I should buy a boat",face:"img/adam.jpg"},{id:3,name:"Perry Governor",lastText:"Look at my mukluks!",face:"img/perry.png"},{id:4,name:"Mike Harrington",lastText:"This is wicked good ice cream.",face:"img/mike.png"}];return{all:function(){return t},remove:function(a){t.splice(t.indexOf(a),1)},get:function(a){for(var e=0;e<t.length;e++)if(t[e].id===parseInt(a))return t[e];return null}}})}(),function(){"use strict";function t(t){}angular.module("app.tab").controller("DashCtrl",["$scope",t])}();
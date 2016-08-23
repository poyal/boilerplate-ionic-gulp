angular.module('app.templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('app/chats/chat-detail.html','<!--\r\n  This template loads for the \'tab.friend-detail\' state (app.js)\r\n  \'friend\' is a $scope variable created in the FriendsCtrl controller (controllers.js)\r\n  The FriendsCtrl pulls data from the Friends service (service.js)\r\n  The Friends service returns an array of friend data\r\n-->\r\n<ion-view view-title="{{chat.name}}">\r\n  <ion-content class="padding">\r\n    <img ng-src="{{vm.chat.face}}" style="width: 64px; height: 64px">\r\n    <p>\r\n      {{vm.chat.lastText}}\r\n    </p>\r\n  </ion-content>\r\n</ion-view>\r\n');
$templateCache.put('app/chats/chats.html','<ion-view view-title="Chats">\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item class="item-remove-animate item-avatar item-icon-right" ng-repeat="chat in vm.chats" type="item-text-wrap" ui-sref="app.chat({chatId:chat.id})">\r\n        <img ng-src="{{chat.face}}">\r\n        <h2>{{chat.name}}</h2>\r\n        <p>{{chat.lastText}}</p>\r\n        <i class="icon ion-chevron-right icon-accessory"></i>\r\n\r\n        <ion-option-button class="button-assertive" ng-click="vm.remove(chat)">\r\n          Delete\r\n        </ion-option-button>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-view>\r\n');
$templateCache.put('app/dash/dash.html','<ion-view view-title="Dashboard">\r\n  <ion-content class="padding">\r\n    <h2>Welcome to Ionic</h2>\r\n    <p>\r\n    This is the Ionic starter for tabs-based apps. For other starters and ready-made templates, check out the <a href="http://market.ionic.io/starters" target="_blank">Ionic Market</a>.\r\n    </p>\r\n    <p>\r\n      To edit the content of each tab, edit the corresponding template file in <code>www/templates/</code>. This template is <code>www/templates/tab-dash.html</code>\r\n    </p>\r\n    <p>\r\n    If you need help with your app, join the Ionic Community on the <a href="http://forum.ionicframework.com" target="_blank">Ionic Forum</a>. Make sure to <a href="http://twitter.com/ionicframework" target="_blank">follow us</a> on Twitter to get important updates and announcements for Ionic developers.\r\n    </p>\r\n    <p>\r\n      For help sending push notifications, join the <a href="https://apps.ionic.io/signup" target="_blank">Ionic Platform</a> and check out <a href="http://docs.ionic.io/docs/push-overview" target="_blank">Ionic Push</a>. We also have other services available.\r\n    </p>\r\n  </ion-content>\r\n</ion-view>\r\n');
$templateCache.put('app/main/main.html','<ion-view>\r\n  <h1>Home</h1>\r\n  <ul>\r\n    <li><button type="button" class="button" ui-sref="app.dash">Dash</button></li>\r\n  </ul>\r\n</ion-view>\r\n');
$templateCache.put('app/setting/setting.html','<ion-view view-title="Account">\r\n  <ion-content>\r\n    <ion-list>\r\n    <ion-toggle  ng-model="vm.settings.enableFriends">\r\n        Enable Friends\r\n    </ion-toggle>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-view>\r\n');
$templateCache.put('app/templates/menu.html','<ion-side-menus enable-menu-with-back-views="false">\r\n  <ion-side-menu-content>\r\n    <ion-nav-bar class="bar-stable">\r\n      <ion-nav-back-button>\r\n      </ion-nav-back-button>\r\n\r\n      <ion-nav-buttons side="left">\r\n        <button class="button button-icon button-clear ion-navicon" menu-toggle="left">\r\n        </button>\r\n      </ion-nav-buttons>\r\n    </ion-nav-bar>\r\n    <ion-nav-view name="menuContent"></ion-nav-view>\r\n  </ion-side-menu-content>\r\n\r\n  <ion-side-menu side="left">\r\n    <ion-header-bar class="bar-stable">\r\n      <h1 class="title">Left</h1>\r\n    </ion-header-bar>\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-item menu-close ui-sref="home">\r\n          Home\r\n        </ion-item>\r\n        <ion-item menu-close ui-sref="app.page.index">\r\n          Publish\r\n        </ion-item>\r\n        <ion-item menu-close ui-sref="app.dash">\r\n          Dash\r\n        </ion-item>\r\n        <ion-item menu-close ui-sref="app.chats">\r\n          Chats\r\n        </ion-item>\r\n        <ion-item menu-close ui-sref="app.setting">\r\n          Setting\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-side-menu>\r\n</ion-side-menus>\r\n');
$templateCache.put('app/page/contract/page1.html','<ion-view title="\uACC4\uC57D\uC11C \uC791\uC131 - 1\uB2E8\uACC4">\r\n  <ion-content></ion-content>\r\n</ion-view>\r\n');
$templateCache.put('app/page/contract/page2.html','<ion-view title="\uACC4\uC57D\uC11C \uC791\uC131 - 2\uB2E8\uACC4">\r\n  <ion-content></ion-content>\r\n</ion-view>\r\n');
$templateCache.put('app/page/index/index.html','<ion-view title="Index list">\n  <ion-content>\n    <ul class="list">\n      <li\n        ng-class="{\'item\':true, \'item-divider\':route.header}"\n        ng-repeat="route in vm.pages"\n        ng-click="vm.goto(route)"\n      >\n          {{route.title}}\n          <span ng-if="route.link"> | {{route.link}}</span>\r\n      </li>\n    </ul>\n  </ion-content>\n</ion-view>\r\n');
$templateCache.put('app/page/user/join.html','<ion-view title="\uD68C\uC6D0\uAC00\uC785">\r\n  <ion-content></ion-content>\r\n</ion-view>\r\n');
$templateCache.put('app/page/user/login.html','<ion-view title="\uB85C\uADF8\uC778">\r\n  <ion-content></ion-content>\r\n</ion-view>\r\n');
$templateCache.put('app/page/user/withdraw.html','<ion-view title="\uD0C8\uD1F4">\r\n  <ion-content></ion-content>\r\n</ion-view>\r\n');}]);
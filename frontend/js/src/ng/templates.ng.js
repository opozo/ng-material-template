goog.provide('ngmaterial.ng');
ngmaterial.ng = angular.module('ngmaterial.ng', []).
		run(['$templateCache',
				 function($templateCache) {
  'use strict';

  $templateCache.put('/ng/dashboard.ng',
    "<div id=\"dashboard-view\">Dashboard</div>"
  );


  $templateCache.put('/ng/home.ng',
    "<div id=\"home-view\"><p><div layout layout-sm=\"column\"><md-input-container flex class=\"md-default-theme\" autofocus><label for=\"first-name\">First Name</label><input ng-model=\"homeCtrl.myUser.firstName\" class=\"ng-pristine ng-untouched ng-valid md-input\" tabindex=\"0\" id=\"first-name\" aria-invalid=\"false\"><div class=\"md-placeholder\">Please input your first name</div></md-input-container><md-input-container flex class=\"md-default-theme\"><label for=\"last-name\">Last Name</label><input ng-model=\"homeCtrl.myUser.lastName\" class=\"ng-pristine ng-untouched ng-valid md-input\" tabindex=\"0\" id=\"last-name\" aria-invalid=\"false\"><div class=\"md-placeholder\">Please input your last name</div></md-input-container></div><div><h2 data-ng-class=\"homeCtrl.myColor\">{{homeCtrl.sayHello() | uppercase}}</h2></div></p></div>"
  );

}]);
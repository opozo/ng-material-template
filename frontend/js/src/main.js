/**
 * @fileoverview Primary module for the app.
 */

goog.provide('ngmaterial.module');
goog.provide('ngmaterial.routes');
goog.provide('ngmaterial.themes');

goog.require('ngmaterial.controller.AppCtrl');
goog.require('ngmaterial.controller.HomeCtrl');
goog.require('ngmaterial.controller.DashboardCtrl');
goog.require('ngmaterial.ng');



/**
 * Setup application routes.
 * @param {!angular.$routeProvider} $routeProvider Route provider.
 * @param {!angular.$locationProvider} $locationProvider Location provider.
 * @ngInject
 */
ngmaterial.routes = function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider.
      when('/', {
        templateUrl: '/ng/home.ng',
        controller: 'HomeCtrl',
        controllerAs: 'homeCtrl'
      }).
      when('/dashboard', {
        templateUrl: '/ng/dashboard.ng',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboardCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
};


/**
 * Setup themes and icons.
 * @param {!md.$mdThemingProvider} $mdThemingProvider Theme provider.
 * @param {!md.$mdIconProvider} $mdIconProvider Icon provider.
 * @ngInject
 */
ngmaterial.themes = function($mdThemingProvider, $mdIconProvider) {
  var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50'],
    '50': 'ffffff'
  });
  $mdThemingProvider.definePalette('customBlue', customBlueMap);
  $mdThemingProvider.theme('default')
      .primaryPalette('customBlue', {
        'default': '500',
        'hue-1': '50'
      })
      .accentPalette('red');
  $mdThemingProvider.theme('input', 'default').primaryPalette('grey');

  $mdIconProvider.defaultIconSet('/img/avatars.svg', 128);
};


/**
 * The main module for the app.
 * @type {!angular.Module}
 */
ngmaterial.module = angular.module('BoilerplateApp', [
  ngmaterial.ng.name,
  'ngRoute',
  'ngMaterial',
  'ngMdIcons'
]);

ngmaterial.module.config(ngmaterial.routes);
ngmaterial.module.config(ngmaterial.themes);
ngmaterial.module.controller('AppCtrl', ngmaterial.controller.AppCtrl);
ngmaterial.module.controller('HomeCtrl', ngmaterial.controller.HomeCtrl);
ngmaterial.module.controller('DashboardCtrl',
    ngmaterial.controller.DashboardCtrl);

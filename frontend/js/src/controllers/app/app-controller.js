/**
 * @fileoverview App controller.
 */

goog.provide('ngmaterial.controller.AppCtrl');

goog.scope(function() {

/**
 * Application controller.
 *
 * @param {!md.$mdSidenav} $mdSidenav Sidenav provider.
 * @constructor
 * @ngInject
 * @export
 */
ngmaterial.controller.AppCtrl = function($mdSidenav) {
  /** @private {!md.$mdSidenav} */
  this.mdSidenav_ = $mdSidenav;

  /**
   * Selected item.
   * @private {Element}
   */
  this.selectedItem_;

  this.start_();
};
var AppCtrl = ngmaterial.controller.AppCtrl;


/**
 * Initializes controller.
 * @private
 */
AppCtrl.prototype.start_ = function() {
  var route = window.location.pathname.split('/')[1];
  if (!route) {
    route = 'home';
    this.selectedItem_ = $('#' + route);
  } else {
    switch (route) {
      case 'home':
      case 'dashboard':
        $('#home').removeClass('active');
        this.selectedItem_ = $('#' + route);
        break;
      default:
        this.selectedItem_ = $('#home');
    }
  }
  this.selectedItem_.addClass('active');
};


/**
 * Toggle sidebar navigation.
 * @export
 */
AppCtrl.prototype.toggleSidenav = function() {
  this.mdSidenav_('left').toggle();
};


/**
 * Close sidebar navigation.
 * @export
 */
AppCtrl.prototype.closeSidenav = function() {
  this.mdSidenav_('left').close();
};


/**
 * Select menu item.
 * @export
 */
AppCtrl.prototype.selectItem = function($event) {
  // Normalizing target element due to event bubbling.
  switch ($event.target.tagName.toLowerCase()) {
    case 'ng-md-icon':
    case 'div':
    case 'md-item-content':
    case 'svg':
    case 'path':
      var link = $($event.target).closest('a');
      break;
    default:
      var link = $($event.target);
  }

  this.selectedItem_.removeClass('active');
  link.addClass('active');
  this.selectedItem_ = link;
  this.closeSidenav();
};

});  // goog.scope

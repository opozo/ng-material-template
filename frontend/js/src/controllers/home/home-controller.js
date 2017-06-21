/**
 * @fileoverview Home controller.
 */

goog.provide('ngmaterial.controller.HomeCtrl');

goog.scope(function() {

/**
 * Main page controller.
 *
 * @constructor
 * @export
 */
ngmaterial.controller.HomeCtrl = function() {
  /**
   * @type {Object}
   * @expose
   */
  this.myUser = {
    /** @expose */
    firstName: 'Orlando',
    /** @expose */
    lastName: 'Pozo'
  };

  /**
   * It should not be visible in the scope of the view.
   * @private {string}
   */
  this.greeting_ = 'Bonjour';
};
var HomeCtrl = ngmaterial.controller.HomeCtrl;


/**
 * Prints the user's full name.
 *
 * @return {string} The name.
 * @export
 */
HomeCtrl.prototype.sayHello = function() {
  return this.greeting_ + ' ' + this.myUser.firstName + ' ' +
      this.myUser.lastName;
};

});  // goog.scope

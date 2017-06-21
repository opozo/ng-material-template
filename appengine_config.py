# Application bootstrapper.

import os
import sys

# Setup App Engine config flags
APPLICATION_ID = os.environ.get('APPLICATION_ID', '')

if APPLICATION_ID == 's~ng-material-template': # prod
  handler_config_JQUERY_JS = '/lib/jquery/dist/jquery.min.js'
  handler_config_ANGULAR_JS = '/lib/angular/angular.min.js'
  handler_config_ANGULAR_ROUTE_JS = '/lib/angular-route/angular-route.min.js'
  handler_config_ANGULAR_ANIMATE_JS = '/lib/angular-animate/angular-animate.min.js'
  handler_config_ANGULAR_ARIA_JS = '/lib/angular-aria/angular-aria.min.js'
  handler_config_ANGULAR_MATERIAL_JS = '/lib/angular-material/angular-material.min.js'
  handler_config_ANGULAR_MATERIAL_ICONS_JS = '/lib/angular-material-icons/angular-material-icons.min.js'
  handler_config_ANGULAR_MATERIAL_CSS = '/lib/angular-material/angular-material.min.css'
  handler_config_SCROLL_REVEAL_JS = '/lib/scroll-reveal/dist/scrollReveal.min.js'
  handler_config_JS_BUNDLE = '/js/min/bundle.min.js'
  handler_config_CSS_BUNDLE = '/css/min/bundle.min.css'
elif APPLICATION_ID == 'dev~ng-material-template': # dev
  handler_config_JQUERY_JS = '/lib/jquery/dist/jquery.js'
  handler_config_ANGULAR_JS = '/lib/angular/angular.js'
  handler_config_ANGULAR_ROUTE_JS = '/lib/angular-route/angular-route.js'
  handler_config_ANGULAR_ANIMATE_JS = '/lib/angular-animate/angular-animate.js'
  handler_config_ANGULAR_ARIA_JS = '/lib/angular-aria/angular-aria.js'
  handler_config_ANGULAR_MATERIAL_JS = '/lib/angular-material/angular-material.js'
  handler_config_ANGULAR_MATERIAL_ICONS_JS = '/lib/angular-material-icons/angular-material-icons.js'
  handler_config_ANGULAR_MATERIAL_CSS = '/lib/angular-material/angular-material.css'
  handler_config_SCROLL_REVEAL_JS = '/lib/scroll-reveal/dist/scrollReveal.js'
  handler_config_JS_BUNDLE = '/js/min/bundle.min.js'
  handler_config_CSS_BUNDLE = '/css/bundle.css'


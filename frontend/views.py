"""Frontend application views."""

__author__ = 'orlandopozo@gmail.com (Orlando Pozo)'

from django import shortcuts
from django.template import RequestContext

from google.appengine.api import lib_config


config = lib_config.register(
    'handler_config', {
      'JQUERY_JS': '/lib/jquery/dist/jquery.min.js',
      'ANGULAR_JS': '/lib/angular-route/angular.min.js',
      'ANGULAR_ROUTE_JS': '/lib/angular-route/angular-route.min.js',
      'ANGULAR_ANIMATE_JS': '/lib/angular-animate/angular-animate.min.js',
      'ANGULAR_ARIA_JS': '/lib/angular-aria/angular-aria.min.js',
      'ANGULAR_MATERIAL_JS': '/lib/angular-material/angular-material.min.js',
      'ANGULAR_MATERIAL_ICONS_JS': '/lib/angular-material/angular-material.min.js',
      'ANGULAR_MATERIAL_CSS': '/lib/angular-material/angular-material.min.css',
      'SCROLL_REVEAL_JS' : '/lib/scroll-reveal/dist/scrollReveal.min.js',
      'JS_BUNDLE': '/js/min/main.min.js',
      'CSS_BUNDLE': '/css/min/main.min.css'
    })

def Render(tpl, ctx, request):
  """Render django template.

  Args:
    tpl: Template name.
    ctx: Template dictionary context.
    request: Request Object.
  Returns:
    HttpResponse object.
  """
  ctx.update({
    'jquery_js': config.JQUERY_JS,
    'angular_js': config.ANGULAR_JS,
    'angular_route_js': config.ANGULAR_ROUTE_JS,
    'angular_animate_js': config.ANGULAR_ANIMATE_JS,
    'angular_aria_js': config.ANGULAR_ARIA_JS,
    'angular_material_js': config.ANGULAR_MATERIAL_JS,
    'angular_material_icons_js': config.ANGULAR_MATERIAL_ICONS_JS,
    'angular_material_css': config.ANGULAR_MATERIAL_CSS,
    'scroll_reveal_js': config.SCROLL_REVEAL_JS,
    'js_bundle': config.JS_BUNDLE,
    'css_bundle': config.CSS_BUNDLE
  })
  return shortcuts.render_to_response(tpl, ctx,
      context_instance=RequestContext(request))


def HomeHandler(request):
  """Main HTTP handler.

  Args:
    request: Request Object.
  Returns:
    HttpResponse object.
  """
  ctx = {}
  return Render('home.html', ctx, request)

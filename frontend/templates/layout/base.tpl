<!DOCTYPE html>
<html lang="en" ng-app="BoilerplateApp">
  <head>
    <meta charset="utf-8">
    <meta name="description" content="{% block meta-description %}{% endblock %}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <base href="/">
    <title>{% block title %}{% endblock %}</title>
    {% block head-css %}
    <link rel="stylesheet" href="{{angular_material_css}}">
    <link rel="stylesheet" href="{{css_bundle}}">
    {% endblock %}
    {% block head-js %}{% endblock %}
  </head>
  <body layout="row" ng-controller="AppCtrl as appCtrl"
        data-sr="enter top ease-in over 0.5s reset">
    {% block header %}
    <md-sidenav layout="column" class="md-sidenav-left md-whiteframe-z2"
                md-component-id="left" md-is-locked-open="$mdMedia('gt-md')">
      <md-toolbar class="md-tall md-hue-2">
        <span flex></span>
        <div layout="column" class="inset">
          <md-icon md-svg-icon="svg-11" class="avatar"></md-icon>
          <div class="email">
            <a href="https://www.google.com/profiles/me" target="_blank">
              orlandopozo@gmail.com
            </a>
          </div>
        </div>
      </md-toolbar>
      <md-list ng-click="appCtrl.selectItem($event)">
        <md-item>
          <a href="/" id="home" class="active">
            <md-item-content md-ink-ripple layout="row" layout-align="start center">
              <div class="inset">
                <ng-md-icon icon="home"></ng-md-icon>
              </div>
              <div class="inset">Home</div>
            </md-item-content>
          </a>
        </md-item>
        <md-item>
          <a id="dashboard" href="/dashboard">
            <md-item-content md-ink-ripple layout="row" layout-align="start center">
              <div class="inset">
                <ng-md-icon icon="dashboard"></ng-md-icon>
              </div>
              <div class="inset">Dashboard</div>
            </md-item-content>
          </a>
        </md-item>
      </md-list>
    </md-sidenav>
    {% endblock %}
    {% block main %}
    <div layout="column" class="relative" layout-fill role="main">
      <md-button class="md-fab md-fab-bottom-right" aria-label="Add">
        <ng-md-icon icon="add"></ng-md-icon>
      </md-button>
      <md-toolbar>
        <div class="md-toolbar-tools">
          <md-button ng-click="appCtrl.toggleSidenav()" hide-gt-md
                     aria-label="Menu">
            <ng-md-icon icon="menu"></ng-md-icon>
          </md-button>
          <h3>Application</h3>
          <span flex></span>
        </div>
      </md-toolbar>
      <md-content flex md-scroll-y>
        <ui-view layout="column" layout-fill layout-padding ng-view>
          Loading...
        </ui-view>
      </md-content>
    </div>
    {% endblock %}
    {% block body-js %}
    <script src="{{jquery_js}}"></script>
    <script src="{{angular_js}}"></script>
    <script src="{{angular_route_js}}"></script>
    <script src="{{angular_animate_js}}"></script>
    <script src="{{angular_aria_js}}"></script>
    <script src="{{angular_material_js}}"></script>
    <script src="{{angular_material_icons_js}}"></script>
    <script src="{{scroll_reveal_js}}"></script>
    <script src="{{js_bundle}}"></script>
    <script>
      var config = {
          vFactor: 0.10
      };
      window.sr = new window.scrollReveal(config);
    </script>
    {% endblock %}
  </body>
</html>

"""Ping API URL router."""

__author__ = 'orlandopozo@gmail.com (Orlando Pozo)'

from django.conf.urls import defaults

urlpatterns = defaults.patterns(
    'api.ping.views',
    defaults.url(r'/send/?$', 'PingHandler'),
)

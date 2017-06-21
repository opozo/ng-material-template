"""Ping API view handlers."""

__author__ = 'orlandopozo@gmail.com (Orlando Pozo)'

import json
from django import http
from lib.ping import ping


def PingHandler(request):
  """Send a ping.

  Args:
    request: HTTP request object.
  Returns:
    Returns an HttpResponse object with the rendered template.
  """
  response = ping.Send()
  data = json.dumps(response)
  return http.HttpResponse(data)

"""Application settings."""

__author__ = 'orlandopozo@gmail.com (Orlando Pozo)'

import os

DEBUG = os.environ.get('SERVER_SOFTWARE', '').startswith('Dev')

ROOT_URLCONF = 'urls'

INSTALLED_APPS = (
    'frontend',
)
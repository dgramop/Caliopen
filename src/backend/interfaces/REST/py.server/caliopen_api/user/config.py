# -*- coding: utf-8 -*-
from __future__ import absolute_import, print_function, unicode_literals

import logging

from .authentication import AuthenticationPolicy, AuthorizationPolicy

log = logging.getLogger(__name__)


def includeme(config):
    """Configure REST API for user and contact."""
    config.set_authentication_policy(AuthenticationPolicy())
    config.set_authorization_policy(AuthorizationPolicy())
    log.debug('Loading user API')
    config.scan('caliopen_api.user.user')

    log.debug('Loading contact API')
    config.scan('caliopen_api.user.contact')

    log.debug('Loading tag API')
    config.scan('caliopen_api.user.tag')

    log.debug('Loading device API')
    config.scan('caliopen_api.user.device')
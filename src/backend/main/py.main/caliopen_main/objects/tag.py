# -*- coding: utf-8 -*-
"""Caliopen User tag parameters classes."""
from __future__ import absolute_import, print_function, unicode_literals
import types
import uuid

from caliopen_main.objects import base
from caliopen_main.user.store import UserTag as ModelUSerTag
from caliopen_main.user.store import ResourceTag as ModelResourceTag
from caliopen_main.user.store import IndexedResourceTag

import logging
log = logging.getLogger(__name__)


class UserTag(base.ObjectUser):

    """Tag related to an user."""

    _attrs = {
        'tag_id': uuid.UUID,
        'name': types.StringType,
        'type': types.StringType}

    _model_class = ModelUSerTag
    _pkey_name = 'tag_id'

    def delete_db(self):
        """Delete a tag in store."""
        self._db.delete()
        return True


class ResourceTag(base.ObjectStorable):

    """Tag nested in resources."""

    _attrs = {
        'tag_id': uuid.UUID,
        'name': types.StringType,
        'type': types.StringType,
    }

    _model_class = ModelResourceTag
    _pkey_name = 'tag_id'
    _index_class = IndexedResourceTag

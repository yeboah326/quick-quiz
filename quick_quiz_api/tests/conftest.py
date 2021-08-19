import pytest
import os
from quick_quiz_api.api import app as flask_app
from quick_quiz_api import config


@pytest.fixture
def app():
    flask_app.config.from_object(config.TestingConfig)
    yield flask_app


@pytest.fixture
def client(app):
    yield app.test_client()

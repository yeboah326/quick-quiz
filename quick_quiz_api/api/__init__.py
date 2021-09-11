from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from quick_quiz_api import config
import time
import os

app = Flask(__name__)

# Configuration
app.config.from_object(config.DevelopmentConfig)

#CORS Setup
CORS(app)


# Database
db = SQLAlchemy(app)
migrate = Migrate(app, db)

from quick_quiz_api.api.auth.controllers import auth
from quick_quiz_api.api.student.controllers import student
from quick_quiz_api.api.tutor.controllers import tutor

app.register_blueprint(auth)
app.register_blueprint(student)
app.register_blueprint(tutor)


@app.route("/time")
def get_current_time():
    return {"time": time.time()}

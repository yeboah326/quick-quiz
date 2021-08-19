from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from quick_quiz_api import config
import time
import os

app = Flask(__name__)

# Configuration
app.config.from_object(config.DevelopmentConfig)

# Database
db = SQLAlchemy(app)
migrate = Migrate(app,db)

@app.route("/time")
def get_current_time():
    return {"time": time.time()}

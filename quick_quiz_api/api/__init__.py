from flask import Flask
from quick_quiz_api import config
from pprint import pprint
import time
import os

app = Flask(__name__)

# Configuration
app.config.from_object(config.DevelopmentConfig)

@app.route("/time")
def get_current_time():
    return {"time": time.time()}

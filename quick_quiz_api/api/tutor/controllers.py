from flask import Blueprint
from quick_quiz_api.api.tutor.models import Tutor


tutor = Blueprint("tutor", __name__, url_prefix="/tutor")


@tutor.route("/hello")
def tutor_hello():
    return {"message": "Tutor routes working"}, 200

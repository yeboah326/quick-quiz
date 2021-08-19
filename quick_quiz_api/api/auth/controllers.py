from flask import Blueprint
from quick_quiz_api.api.student.models import Student
from quick_quiz_api.api.tutor.models import Tutor

auth = Blueprint("auth", __name__, url_prefix="/auth")


@auth.route("/hello")
def auth_hello():
    return {"message": "Auth route working"}, 200

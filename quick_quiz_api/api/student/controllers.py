from flask import Blueprint
from quick_quiz_api.api.student.models import Student

student = Blueprint("student", __name__, url_prefix="/student")


@student.route("/hello")
def student_hello():
    return {"message": "Student route working"}, 200

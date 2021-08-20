from flask import Blueprint, request
from werkzeug.security import generate_password_hash, check_password_hash
from quick_quiz_api.api import db
from quick_quiz_api.api.student.models import Student
from quick_quiz_api.api.tutor.models import Tutor
import datetime
import jwt
import os
import uuid

auth = Blueprint("auth", __name__, url_prefix="/auth")


@auth.route("/hello")
def auth_hello():
    return {"message": "Auth route working"}, 200


@auth.route("/signup", methods=["POST"])
def auth_signup():
    # Receive data
    data = request.get_json()

    if data["user_type"] == "student":
        try:
            # Hash incoming password
            hashed_password = generate_password_hash(data["password"], method="sha256")

            # Create student instance
            student = Student(
                public_id=str(uuid.uuid4()),
                name=data["name"],
                email=data["email"],
                password=hashed_password,
            )

            # Save student instance in the session
            db.session.add(student)
            db.session.commit()

            return {"message": "Student signup successful"}, 200

        except:
            return {"message": "Student signup failed"}, 400

    elif data["user_type"] == "tutor":
        try:
            # Hash incoming password
            hashed_password = generate_password_hash(data["password"], method="sha256")

            # Create tutor instance
            tutor = Tutor(
                public_id=str(uuid.uuid4()),
                name=data["name"],
                email=data["email"],
                password=hashed_password,
            )

            # Save tutor instance in the session
            db.session.add(tutor)
            db.session.commit()

            return {"message": "Tutor signup successful"}, 200
        except:
            return {"message": "Tutor signup failed"}, 400


@auth.route("/login", methods=["POST"])
def auth_login():
    # Receive data
    data = request.get_json()

    if data["user_type"] == "student":
        if not auth or not auth["email"] or not auth["password"]:
            return {"message": "User not found or data is invalid"}, 400
        student = Student.query.filter_by(email=auth["email"]).first()

        if not student:
            return {"message": "User not found or data is invalid"}, 400

        if check_password_hash(student.password, auth["password"]):
            token = jwt.encode(
                {
                    "public_id": student.public_id,
                    "exp": datetime.datetime.utcnow() + datetime.timedelta(days=1),
                },
                os.environ.get("SECRET_KEY"),
            )
            return {"public_id": student.public_id, "token": token}, 200
        return {"message": "Authorization failed"}, 401

    elif data["user_type"] == "tutor":
        if not auth or not auth["email"] or not auth["password"]:
            return {"message": "User not found or data is invalid"}, 400
        tutor = Tutor.query.filter_by(email=auth["email"]).first()

        if not tutor:
            return {"message": "User not found or data is invalid"}, 400

        if check_password_hash(tutor.password, auth["password"]):
            token = jwt.encode(
                {
                    "public_id": tutor.public_id,
                    "exp": datetime.datetime.utcnow() + datetime.timedelta(days=1),
                },
                os.environ.get("SECRET_KEY"),
            )
            return {"public_id": tutor.public_id, "token": token}, 200
        return {"message": "Authorization failed"}, 401
